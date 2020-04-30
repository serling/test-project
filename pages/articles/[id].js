import { useRouter } from 'next/router';
import AsyncPageContent from 'components/async-page-content/async-page-content';

import ArticleTemplate from 'templates/article';

const ArticlePage = (props) => {
  const { query } = useRouter();

  return (
    <AsyncPageContent
      {...props}
      endpoint={query.id && `/api/articles/${query.id}`}
      itemRenderer={(data) => {
        return <ArticleTemplate {...data} />;
      }}
    />
  );
};

ArticlePage.propTypes = ArticleTemplate.propTypes;

export default ArticlePage;
