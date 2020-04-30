import PropTypes from 'prop-types';

const ArticleStubFallback = () => {
  return (
    <>
      <div className="article-stub-fallback">
        <div className="article-stub__content">
          <div>FALLBACK</div>
          <div>FALLBACK</div>
        </div>
      </div>
      <style jsx>{`
        .article-stub-fallback {
          padding: 0.5rem;
          background-color: #f5f5f5;

          &__content {
          }
        }
      `}</style>
    </>
  );
};

ArticleStubFallback.propTypes = {};

export default ArticleStubFallback;
