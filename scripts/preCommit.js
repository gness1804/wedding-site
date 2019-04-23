const util = require('util');
const { exec } = require('child_process');

const promisifiedExec = util.promisify(exec);

const resetAndExit = message => {
  promisifiedExec('git reset HEAD .')
    .then(() => {
      process.stderr.write(message);
    })
    .then(() => {
      process.exit(1);
    });
};

const forbiddenBranches = ['master', 'develop'];

const getCurrentBranch = () => {
  return promisifiedExec('git rev-parse --abbrev-ref HEAD');
};

getCurrentBranch()
  .then(ret => {
    const currentBranch = ret.stdout;
    for (const branch of forbiddenBranches) {
      if (currentBranch.includes(branch)) {
        resetAndExit(
          `Oops, you are on the ${branch} branch. Please switch branches before you commit.`,
        );
      }
    }
  })
  .then(() => {
    process.stdout.write('Sucessfully passed pre-commit checks.');
  })
  .catch(err => {
    process.stderr.write(`Error: ${err.message || JSON.stringify(err)}`);
  });
