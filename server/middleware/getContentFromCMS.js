const getContent = require('../helpers/getContent');

const getContentFromCMS = async (req, res, next) => {
  req.content = await getContent();
  return next();
};

module.exports = getContentFromCMS;
