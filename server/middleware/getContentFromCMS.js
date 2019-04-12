const getContent = require('../helpers/getContent');
const getDates = require('../helpers/getDates');

const getContentFromCMS = async (req, res, next) => {
  req.content = await getContent();
  req.dates = await getDates();
  return next();
};

module.exports = getContentFromCMS;
