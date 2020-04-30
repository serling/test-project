import PropTypes from 'prop-types';
import Link from 'next/link';

import Heading from 'components/heading/heading';
import AsyncItem from 'components/async-list/async-item';

const FallbackArticleStub = () => {
  return (
    <>
      <div className="fallback-article-stub">
        <div className="fallback-article-stub__title" />
        <div className="fallback-article-stub__text" />
      </div>
      <style jsx>{`
        .fallback-article-stub {
          height: 300px;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;

          &__title {
            height: 10%;
            background-color: lightgrey;
            margin-bottom: 0.5rem;
            border-radius: 4px;
          }

          &__text {
            flex: 1 0 auto;
            background-color: lightgrey;
            border-radius: 4px;
          }
        }
      `}</style>
    </>
  );
};

const AsyncArticleStub = ({ endpoint, id }) => {
  return (
    <AsyncItem
      endpoint={`${endpoint}/${id}`}
      itemRenderer={(props) => {
        return <ArticleStub {...props} />;
      }}
    />
  );
};

const ArticleStub = ({ id, title, text }) => {
  return (
    <>
      <div className="article-stub">
        <div className="article-stub__content">
          <div>
            <Link href={`/articles/${id}`}>
              <a>{title && <Heading level={3} text={title} />}</a>
            </Link>
            {text && <p>{text}</p>}
          </div>
        </div>
      </div>
      <style jsx>{`
        .article-stub {
          padding: 0.5rem;
          background-color: #f5f5f5;
          border-radius: 4px;

          &__content {
          }
        }
      `}</style>
    </>
  );
};

ArticleStub.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export { ArticleStub, AsyncArticleStub, FallbackArticleStub };
