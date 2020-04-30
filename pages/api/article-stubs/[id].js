import articles from 'data/collections/article-stubs';

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const article = articles.items.filter((article) => article.id === id)[0];

  res.status(200).json(article);
};
