const { readFile, writeFile } = require('fs');
const util = require('util');
const path = require('path');

const promisifiedReadFile = util.promisify(readFile);
const promisifiedWriteFile = util.promisify(writeFile);

const file = path.join(__dirname, '../client/build/index.html');

promisifiedReadFile(file, 'utf-8')
  // chain the remaining replace calls here
  .then(res =>
    res.replace('href="/manifest.json"', 'href="/client/manifest.json"'),
  )
  .then(res => promisifiedWriteFile(file, res, 'utf-8'))
  .then(() => {
    process.stdout.write(`Successfully modified ${file}.`);
  })
  .catch(err => {
    process.stderr.write(
      `Error modifying file ${file}: ${err.message || JSON.stringify(err)}`,
    );
  });
