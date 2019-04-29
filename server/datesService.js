const { readFile } = require('fs');
const path = require('path');
const util = require('util');

const promisifiedReadFile = util.promisify(readFile);

const datesService = (req, res) => {
  const file = path.join(__dirname, './content/dates.json');
  promisifiedReadFile(file, 'utf-8')
    .then(result => res.end(result))
    .catch(err =>
      res.end({
        error: `Error reading from ${file}: ${err.message ||
          JSON.stringify(err)}`,
      }),
    );
};

module.exports = datesService;
