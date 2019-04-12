const { readFile } = require('fs');
const path = require('path');
const util = require('util');

const promisifiedReadFile = util.promisify(readFile);

const getContent = () => {
  const file = path.join(__dirname, '../content/dates.json');
  return promisifiedReadFile(file, 'utf-8')
    .then(res => JSON.parse(res))
    .catch(err =>
      process.stderr.write(
        `Error reading from content ${file}: ${err.message ||
          JSON.stringify(err)}`,
      ),
    );
};

module.exports = getContent;
