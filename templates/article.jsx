import Heading from 'components/heading/heading';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Article = ({ title, text }) => {
  return (
    <>
      <div className="article">
        <div className="article__breadcrumbs">
          <Link href="/articles">
            <a>Full list of articles</a>
          </Link>
        </div>
        <div className="article__header">
          <Heading text={title} level={1} />
          <p className="article__lead">{text}</p>
        </div>
        <div className="article__content"></div>
      </div>
      <style jsx>{`
        .article {
        }
      `}</style>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Article;
