#!/usr/bin/env bun

import { createCLI } from '@rubriclab/cli'
import { $ } from 'bun'
import { z } from 'zod'

createCLI({
	commands: [
		{
			args: z.object({
				name: z.string().describe('Name of the submodule'),
				repo: z.string().describe('URL of the submodule')
			}),
			description: 'Adds a submodule to the repository',
			handler: async ({ name, repo }) => {
				console.log(`Adding ${name} from ${repo}`)
				await $`git submodule add ${repo} apps/${name}`
			},
			name: 'add-app'
		},
		{
			args: z.object({
				name: z.string().describe('Name of the submodule'),
				repo: z.string().describe('URL of the submodule')
			}),
			description: 'Adds a submodule to the repository',
			handler: async ({ name, repo }) => {
				console.log(`Adding ${name} from ${repo}`)
				await $`git submodule add ${repo} packages/${name}`
			},
			name: 'add-package'
		}
	],
	description: 'Submodule management for Rubric',
	name: 'github',
	version: '1.0.0'
}).parse()
