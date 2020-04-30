import { content } from 'data/pages/articles';

export default (req, res) => {
  res.status(200).json(content);
};
