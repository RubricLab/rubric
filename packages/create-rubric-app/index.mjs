#! /usr/bin/env node

import boxen from 'boxen'
import chalk from 'chalk'
import child_process from 'child_process'
import clear from 'clear'
import figlet from 'figlet'
import {mkdirSync, readFileSync, readdirSync, statSync, writeFileSync} from 'fs'
import inquirer from 'inquirer'
import {parseArgs} from 'node:util'
import open from 'open'
import path from 'path'
import {fileURLToPath} from 'url'

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

var downloadFile = (url, dest) => {
	child_process.execSync('wget -P ' + dest + ' ' + url, {stdio: [0, 1, 2]})
}

// Parse arguments

const {
	values: {name: _name, yes: _yes, template: _template}
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

const name = _name || (!_yes ? (await inquirer.prompt([QUESTIONS['project-name']]))['project-name'] : 'my-app')
const template = _template || (!_yes ? (await inquirer.prompt([QUESTIONS['project-choice']]))['project-choice'] : 'fullstack')

copyTemplate(name, template)

if (template === 'fullstack') downloadFile('https://rubriclab.com/fonts/CalSans-SemiBold.ttf', `${name}/public/fonts/`)

child_process.execSync(`cd ${name} && yarn`, {stdio: [0, 1, 2]})
open(`http://localhost:3000`)
child_process.execSync(`cd ${name} && yarn dev`, {stdio: [0, 1, 2]})
