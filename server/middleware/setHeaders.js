const setHeaders = (req, res, next) => {
  // TODO: replace hardcoded url with variable
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', ['GET', 'POST', 'DELETE', 'PUT']);
  res.set('Access-Control-Allow-Headers', ['Content-Type']);
  return next();
};

module.exports = setHeaders;
