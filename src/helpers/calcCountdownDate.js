const calcCountdownDate = (targetDate, earlierDate) => {
  const uglifiedTargetDate = Date.parse(targetDate);
  let uglifiedEarlierDate = Date.now();
  if (earlierDate) {
    uglifiedEarlierDate = Date.parse(earlierDate);
  }
  const diff = uglifiedTargetDate - uglifiedEarlierDate;
  return diff / (1000 * 60 * 60 * 24);
};

export default calcCountdownDate;
