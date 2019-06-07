/**
 * Checks whether data coming from CMS is valid
 * Fails if:
 *  - value is falsy
 *  - value is empty array
 *  - value is empty object
 * @param {any } arg - can be of any type.
 * @returns {Promise<boolean>} - promise that resolves into pass or fail the test
 */

const doIContainValidData = arg => {
  return new Promise(resolve => {
    if (!arg) {
      resolve(false);
    }
    if (Array.isArray(arg)) {
      if (arg.length === 0) {
        resolve(false);
      }
    }
    if (JSON.stringify(arg) !== JSON.stringify({})) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

export default doIContainValidData;
