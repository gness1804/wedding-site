const { readFile } = require('fs');
const path = require('path');
const util = require('util');

const promisifiedReadFile = util.promisify(readFile);

const datesService = (req, res) => {
  const file = path.join(__dirname, './content/dates.json');
  promisifiedReadFile(file, 'utf-8')
    .then(result => JSON.parse(result))
    .then(result => res.send(result))
    .catch(err =>
      res.status(500).send({
        error: `Error reading from ${file}: ${err.message ||
          JSON.stringify(err)}`,
      }),
    );
  // res.end(
  //   'I am the dates service. Hopefully I will soon serve up actual content.',
  // );
};

module.exports = datesService;
