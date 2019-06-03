const { readFile } = require('fs');
const path = require('path');
const util = require('util');

const promisifiedReadFile = util.promisify(readFile);

/**
 * serves up JSON content for the site
 * @param {object} req - the express req object
 * @param {object} res - the express res object
 */
const imagesService = (req, res) => {
  const file = path.join(__dirname, './content/images.json');
  promisifiedReadFile(file, 'utf-8')
    .then(result => res.end(result))
    .catch(err =>
      res.end({
        error: `Error reading from ${file}: ${err.message ||
          JSON.stringify(err)}`,
      }),
    );
};

module.exports = imagesService;
