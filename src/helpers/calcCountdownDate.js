/**
 * Calculates the number of days between the target date and today
 * @param {string} targetDate - the date in the future we are counting down from.
 * @param {string } earlierDate - today's date. Defaults to Date.now() if no value is passed.
 * @returns {number} - the number of days between the two dates. If targetDate is later than earlier date, this will display number of days remaining; else, the function returns undefined.
 */

const calcCountdownDate = (targetDate, earlierDate) => {
  const uglifiedTargetDate = Date.parse(targetDate);
  let uglifiedEarlierDate = Date.now();
  if (earlierDate) {
    uglifiedEarlierDate = Date.parse(earlierDate);
  }
  const diff = uglifiedTargetDate - uglifiedEarlierDate;
  if (diff <= 0) return undefined;
  return diff / (1000 * 60 * 60 * 24);
};

export default calcCountdownDate;
