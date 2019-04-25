const contentService = (req, res) => {
  res.end(
    'I am the content service. Hopefully I will soon serve up actual content.',
  );
};

module.exports = contentService;
