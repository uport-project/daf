import program from 'commander'
import inquirer from 'inquirer'

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

import './did'
import './credential'
import './presentation'
import './data-explorer'
import './sdr'
import './message'
import './version'
import './crypto'
import './execute'
import './server'
import './setup'
import './config'
import './schema'

if (!process.argv.slice(2).length) {
  program.outputHelp()
} else {
  program.parse(process.argv)
}
