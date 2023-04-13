#!/usr/local/bin/test node

const commander = require('commander')
const { prompt } = require('enquirer')
// const chalk = require('chalk')

commander
  .version('1.0.0')
  .description('Configuration DigitalQueue application.')

commander
  .command('build')
  .description('Build application.')
  .action((name, cmd) => {
    prompt([
      {
        type: 'select',
        name: 'mode',
        message: 'Application mode: ',
        choices: ['demonstration', 'supabase']
      },
      {
        type: 'input',
        name: 'max_ram_usage',
        message: 'Max RAM usage, Mb: '
      }
    ])
  })

commander.parse(process.argv)
