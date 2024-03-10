// https://github.com/pingdotgg/zact https://github.com/TheEdoRan/next-safe-action

import {Session} from 'next-auth'
import type z from 'zod'
import {fromZodError} from 'zod-validation-error'

type ActionType<InputType extends z.ZodTypeAny, ResponseType> = (
	input: z.infer<InputType>,
	session: Session
) => Promise<ResponseType>

export type Action<InputType extends z.ZodTypeAny, ResponseType> = ActionType<
	InputType,
	ResponseType
> & {
	definition: InputType
	method: 'GET' | 'POST'
	validate: (input: z.infer<InputType>, session: Session) => void
}

export function action<InputType extends z.ZodTypeAny>(
	procedure: 'public' | 'protected' | 'admin',
	method: 'GET' | 'POST',
	validator?: InputType,
	description?: string
) {
	return function <ResponseType>(
		action: ActionType<InputType, ResponseType>
	): Action<InputType, ResponseType> {
		const validate = (input: z.infer<InputType>) => {
			if (validator) {
				const result = validator.safeParse(input)
				if (result.success === false) {
					const validatedError = fromZodError(result.error)
					throw validatedError
				}
			}
		}

		const validatedAction = async (
			input: z.infer<InputType>,
			session: Session
		) => {
			// const auth = await getServerSession(authOptions)
			// if (procedure === 'protected' && !auth?.user) throw new Error('Unauthorized')
			// if (procedure === 'admin' && auth?.user?.role !== 'admin') throw new Error('Unauthorized')

			validate(input)
			return await action(input, session)
		}

		validatedAction.definition = validator

		validatedAction.method = method

		validatedAction.validate = validate

		validatedAction.procedure = procedure

		validatedAction.description = description

		return validatedAction as Action<InputType, ResponseType>
	}
}
