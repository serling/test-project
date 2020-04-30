import { items } from 'data/collections/articles';

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const article = items.filter((article) => article.id === id)[0];

  res.status(200).json(article);
};
