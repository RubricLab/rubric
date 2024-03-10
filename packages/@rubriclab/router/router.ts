import {NextRequest, NextResponse} from 'next/server'

export const router = ACTIONS => {
	const route = async (
		request: NextRequest,
		response: NextResponse,
		method: 'GET' | 'POST'
	) => {
		const actions = Object.keys(ACTIONS).map(action => ({
			name: action,
			x: ACTIONS[action]
		}))
		const path = new URL(request.url).searchParams.get('api')
		const action = actions.find(
			action => action.x.method === method && action.name === path
		)

		if (!action) return new NextResponse('not found', {status: 404})

		// const session = await auth(request, response)
		const session = {
			user: {
				id: '',
				name: ''
			}
		} // TODO: FIX

		const object: Record<string, string | File> = {}

		if (method === 'GET') {
			const params = new URL(request.url).searchParams
			params.forEach((value, key) => (object[key] = value))

			delete object.api
		}

		if (method === 'POST') {
			const data = await request.formData()

			data.forEach((value, key) => (object[key] = value))
		}

		// console.log(`${method} request to ${path} with ${JSON.stringify(object)}`)

		try {
			action.x.validate(object)
		} catch (error) {
			return new NextResponse(error.message, {status: 400})
		}
		try {
			const response = await action.x(object, session)
			return new NextResponse(JSON.stringify(response), {
				headers: {'content-type': 'application/json'}
			})
		} catch (error) {
			return new NextResponse(error.message, {status: 500})
		}
	}

	return {
		GET: (request, response) => route(request, response, 'GET'),
		POST: (request, response) => route(request, response, 'POST')
	}
}
