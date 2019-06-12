const { execSync } = require('child_process');
const readline = require('readline');
require('dotenv').config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Which version type is this: patch, minor, or major?', answer => {
  const currentVersion = process.env.npm_package_version;
  const upgradeVar = answer.toLowerCase();

  console.log('upgradeVar:', upgradeVar);
  // console.log('sanity check');

  //fail the program if upgradeVar is not one of patch, minor, or major.

  //if possible, automatically upgrade the package.json version using regex replace

  rl.close();
});

// execSync('semver -i  1.2.3 patch');
