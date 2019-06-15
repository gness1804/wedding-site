const { execSync } = require('child_process');
require('dotenv').config();

/**
 *
 * @param {object} [error] - an error object
 * @param {object} stdout - stdout object
 * @param {object} stderr - stderr object
 */
const handleOutput = (error, stdout, stderr) => {
  if (error) {
    process.stderr.write(`Error: ${error.message || JSON.stringify(error)}`);
    process.exit(1);
  }
  process.stdout.write(stdout);
  process.stderr.write(stderr);
};

if (process.argv.indexOf('-d') !== -1) {
  execSync(
    `now -e ACCESS_CODE="${process.env.ACCESS_CODE}" -e DEV_ACCESS_CODE="${
      process.env.DEV_ACCESS_CODE
    }" -e DATABASE="${
      process.env.DATABASE
    }" -e REACT_APP_GOOGLE_MAPS_API_KEY="${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }" -d`,
    handleOutput,
  );
} else {
  execSync(
    `now -e ACCESS_CODE="${process.env.ACCESS_CODE}" -e DEV_ACCESS_CODE="${
      process.env.DEV_ACCESS_CODE
    }" -e DATABASE="${
      process.env.DATABASE
    }" -e REACT_APP_GOOGLE_MAPS_API_KEY="${
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    }"`,
    handleOutput,
  );
}
