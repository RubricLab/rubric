#!/usr/bin/env bun

import { createCLI } from '@rubriclab/cli'
import { $ } from 'bun'
import { z } from 'zod'

createCLI({
	name: 'github',
	version: '1.0.0',
	description: 'Submodule management for Rubric',
	commands: [
		{
			name: 'add-app',
			description: 'Adds a submodule to the repository',
			args: z.object({
				name: z.string().describe('Name of the submodule'),
				repo: z.string().describe('URL of the submodule')
			}),
			handler: async ({ name, repo }) => {
				console.log(`Adding ${name} from ${repo}`)
				await $`git submodule add ${repo} apps/${name}`
			}
		},
		{
			name: 'add-package',
			description: 'Adds a submodule to the repository',
			args: z.object({
				name: z.string().describe('Name of the submodule'),
				repo: z.string().describe('URL of the submodule')
			}),
			handler: async ({ name, repo }) => {
				console.log(`Adding ${name} from ${repo}`)
				await $`git submodule add ${repo} packages/${name}`
			}
		}
	]
}).parse()
