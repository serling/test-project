import { meta, content as pageProps } from 'data/pages/articles';
import AsyncPageContent from 'components/async-page-content/async-page-content';

import ArticlesTemplate from 'templates/articles';

const ArticlesPage = (props) => {
  return (
    <AsyncPageContent
      {...props}
      endpoint="/api/articles"
      itemRenderer={(data) => {
        return <ArticlesTemplate {...data} />;
      }}
    />
  );
};

export const getStaticProps = async () => {
  return {
    props: { meta, ...pageProps },
  };
};

ArticlesPage.propTypes = ArticlesTemplate.propTypes;

export default ArticlesPage;
