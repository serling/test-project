import articles from 'data/collections/article-stubs';

export default (req, res) => {
  res.status(200).json(articles);
};
