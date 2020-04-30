import Heading from 'components/heading/heading';
import PropTypes from 'prop-types';

const Article = ({ title, text }) => {
  return (
    <div className="article">
      Welcome to a full read:
      <div className="article__header">
        <Heading text={title} level={1} />
        <p className="article__lead">{text}</p>
      </div>
      <div className="article__content"></div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
