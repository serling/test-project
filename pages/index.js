import { meta, content as pageProps } from 'data/pages/home';

import HomeTemplate from 'templates/home';
import AsyncPageContent from 'components/async-page-content/async-page-content';

const HomePage = (props) => {
  return (
    <AsyncPageContent
      {...props}
      endpoint="/api/home"
      itemRenderer={(data) => {
        return <HomeTemplate {...data} />;
      }}
    />
  );
};

export const getStaticProps = async ({ _params, _res, _req }) => {
  return {
    props: { meta, ...pageProps },
  };
};

HomePage.propTypes = HomeTemplate.propTypes;

export default HomePage;
