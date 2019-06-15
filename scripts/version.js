const semver = require('semver');
const program = require('commander');
const { readFile, writeFile } = require('fs');
const { promisify } = require('util');
const { join } = require('path');
const { version } = require('../package');
require('dotenv').config();

const promisifiedReadFile = promisify(readFile);
const promisifiedWriteFile = promisify(writeFile);
const packageFile = join(__dirname, '../package.json');

// eslint-disable-next-line no-useless-escape
const versionRegex = /"version": "\d\.\d\.\d",/;

program
  .version('1.0.0')
  .option('-p, --patch', 'Patch or bug fix.')
  .option('-i, --minor', 'Minor fix, or feature.')
  .option(
    '-a, --major',
    'Major fix, such as a significant revamp or major new feature.',
  )
  .parse(process.argv);

let upgradeVar = 'patch';

if (program.minor) {
  upgradeVar = 'minor';
} else if (program.major) {
  upgradeVar = 'major';
}

const newVersion = semver.inc(version, upgradeVar);

promisifiedReadFile(packageFile, 'utf-8')
  .then(contents =>
    contents.replace(versionRegex, `"version": "${newVersion}",`),
  )
  .then(contents => promisifiedWriteFile(packageFile, contents))
  .then(() => {
    process.stdout.write(
      `Successfully upgraded app version! New version: ${newVersion}.\n`,
    );
  })
  .catch(err => {
    process.stderr.write(
      `Error augmenting app version: ${err.message || JSON.stringify(err)}`,
    );
  });
