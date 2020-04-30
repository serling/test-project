import { content } from 'data/pages/home';

export default (req, res) => {
  res.status(200).json(content);
};
