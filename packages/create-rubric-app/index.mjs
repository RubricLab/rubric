#! /usr/bin/env node

import inquirer from 'inquirer'
import {parseArgs} from 'node:util'
import path from 'path'
import {fileURLToPath} from 'url'

import boxen from 'boxen'
import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'

import {mkdirSync, readFileSync, readdirSync, statSync, writeFileSync} from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CHOICES = readdirSync(`${__dirname}/templates`)

const CURR_DIR = process.cwd()

const QUESTIONS = {
	'project-choice': {
		name: 'project-choice',
		type: 'list',
		message: 'What project template would you like to generate?',
		choices: CHOICES,
		default: 'fullstack'
	},
	'project-name': {
		name: 'project-name',
		type: 'input',
		message: 'Project name:',
		validate: function (input) {
			if (/^([A-Za-z\-\_\d])+$/.test(input)) return true
			else return 'Project name may only include letters, numbers, underscores and hashes.'
		}
	}
}

const createDirectoryContents = (templatePath, newProjectPath) => {
	const filesToCreate = readdirSync(templatePath)

	filesToCreate.forEach(file => {
		const origFilePath = `${templatePath}/${file}`

		// get stats about the current file
		const stats = statSync(origFilePath)

		if (stats.isFile()) {
			const contents = readFileSync(origFilePath, 'utf8')

			const writePath = `${CURR_DIR}/${newProjectPath}/${file}`
			writeFileSync(writePath, contents, 'utf8')
		} else if (stats.isDirectory()) {
			mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`)

			// recursive call
			createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`)
		}
	})
}

const copyTemplate = (name, template) => {
	const projectName = name
	const templatePath = `${__dirname}/templates/${template}`

	mkdirSync(`${CURR_DIR}/${projectName}`)

	createDirectoryContents(templatePath, projectName)
}

// Parse arguments

const {
	values: {name, yes, template}
} = parseArgs({
	options: {
		name: {
			type: 'string',
			short: 'n'
		},
		template: {
			type: 'string',
			short: 't'
		},
		yes: {
			type: 'boolean',
			short: 'y'
		}
	}
})

clear()

console.log(
	boxen(
		chalk.bold(
			`Welcome to \n${chalk.hex('#f97316')(
				figlet.textSync('Create Rubric App', {
					font: 'Small',
					horizontalLayout: 'default',
					verticalLayout: 'default'
				})
			)}`
		),
		{
			padding: 1,
			borderStyle: 'round',
			borderColor: '#f97316'
		}
	)
)

if ((name && template) || yes) {
	copyTemplate(name || 'my-app', template || 'fullstack')
} else if (name) {
	inquirer.prompt([QUESTIONS['project-choice']]).then(answers => {
		copyTemplate(name, answers['project-choice'])
	})
} else if (template) {
	inquirer.prompt([QUESTIONS['project-name']]).then(answers => {
		copyTemplate(answers['project-name'], template)
	})
} else {
	inquirer.prompt([QUESTIONS['project-name'], QUESTIONS['project-choice']]).then(answers => {
		copyTemplate(answers['project-name'], answers['project-choice'])
	})
}
