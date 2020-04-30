import PropTypes from 'prop-types';
import isServer from 'utilities/is-server';

import {
  AsyncArticleStub,
  ArticleStub,
  FallbackArticleStub,
} from 'components/article-stub/article-stub';
import Heading from 'components/heading/heading';
import AsyncList from 'components/async-list/async-list';

const Articles = ({ title, description }) => {
  return (
    <>
      <div className="articles">
        <div className="articles__header">
          <Heading text={title} level={1} />
          <p className="articles__lead">{description}</p>
        </div>
        <div className="articles__content">
          {!isServer && (
            <AsyncList
              id="3e8c01c3-321c-4363-bff1-143a4a3bd5f1"
              endpoint="/api/article-stubs"
              buttonText="Load more"
              fallbackComponent={<FallbackArticleStub />}
              itemRenderer={(props) => (
                <AsyncArticleStub {...props} endpoint="/api/article-stubs" />
              )}
            />
          )}
        </div>
      </div>
      <style jsx global>{`
        .articles {
          &__header {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
};

Articles.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.arrayOf(PropTypes.exact(ArticleStub.propTypes)),
  description: PropTypes.string,
};

export default Articles;
