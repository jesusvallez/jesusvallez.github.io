import { spawn } from 'node:child_process'
import { exit } from 'node:process'
import { config } from 'dotenv'

config()

// https://patorjk.com/software/taag/#p=display&f=ANSI%20Regular&t=MESSAGE - ANSI Regular font
const CONTENTFUL_TITLE = `
██████   ██████  ███    ██ ████████ ███████ ███    ██ ████████ ███████ ██    ██ ██      
██      ██    ██ ████   ██    ██    ██      ████   ██    ██    ██      ██    ██ ██      
██      ██    ██ ██ ██  ██    ██    █████   ██ ██  ██    ██    █████   ██    ██ ██      
██      ██    ██ ██  ██ ██    ██    ██      ██  ██ ██    ██    ██      ██    ██ ██      
██████   ██████  ██   ████    ██    ███████ ██   ████    ██    ██       ██████  ███████ 
`

const PRETTIER_TITLE = `
██████  ██████  ███████ ████████ ████████ ██ ███████ ██████  
██   ██ ██   ██ ██         ██       ██    ██ ██      ██   ██ 
██████  ██████  █████      ██       ██    ██ █████   ██████  
██      ██   ██ ██         ██       ██    ██ ██      ██   ██ 
██      ██   ██ ███████    ██       ██    ██ ███████ ██   ██ 
`

const ERROR_TITLE = `
███████ ██████  ██████   ██████  ██████  
██      ██   ██ ██   ██ ██    ██ ██   ██ 
█████   ██████  ██████  ██    ██ ██████  
██      ██   ██ ██   ██ ██    ██ ██   ██ 
███████ ██   ██ ██   ██  ██████  ██   ██ 
`

const SPACEID = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN
const PATH_MODEL = './src/contentful/models'

const spaceArg = SPACEID ? ['-s', SPACEID] : []
const tokenArg = TOKEN ? ['-t', TOKEN] : []
const outArg = ['--out', PATH_MODEL]
const versionArg = ['--v10']

const args: readonly string[] = [...spaceArg, ...tokenArg, ...outArg, ...versionArg]

console.log(CONTENTFUL_TITLE)
console.log(' - Generating models from Contentful')

if (spaceArg.length === 0 || tokenArg.length === 0) {
  console.log(ERROR_TITLE)

  if (spaceArg.length === 0) {
    console.log(' - No CONTENTFUL_SPACE_ID found in .env file')
  }

  if (tokenArg.length === 0) {
    console.log(' - No CONTENTFUL_MANAGEMENT_TOKEN found in .env file')
  }

  exit(1)
}

spawn('cf-content-types-generator', args, { stdio: 'inherit' }).on('close', (code) => {
  if (code === 0) {
    console.log(PRETTIER_TITLE)
    console.log(' - Running prettier on generated models')
    spawn('npx', ['prettier', '--write', `${PATH_MODEL}/*.ts`], { stdio: 'inherit' })
  } else {
    console.log(ERROR_TITLE)
    console.log(' - cf-content-types-generator failed')
  }
})
