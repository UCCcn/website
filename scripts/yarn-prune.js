const exec = require('child_process').exec

const devDependencies = Object.keys(
  require('../package.json').devDependencies
).join(' ')
const command = `yarn remove ${devDependencies}`

/**
 * Approximate `npm prune --production` using `yarn remove`.
 * @see https://gist.github.com/pxwise/c4833557930a5141c4e3c752347e2f2e
 */

const prune = () =>
  exec(command, (_, stdout) => console.log(`yarn-prune result:\n${stdout}`))

prune()
