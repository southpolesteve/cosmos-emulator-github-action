const { exec } = require('@actions/exec')
const path = require('path')

async function main(params) {
  await exec('pwsh.exe', ['-f', path.resolve(__dirname, './script.ps1')])
}
main()
