import { meta, content as pageProps } from 'data/pages/home';
import isServer from 'utilities/is-server';

import HomeTemplate from 'templates/home';
import AsyncPageContent from 'components/async-page-content/async-page-content';

const HomePage = (props) => {
  return (
    <div>
      <AsyncPageContent
        {...props}
        endpoint="/api/home"
        itemRenderer={(data) => {
          return <HomeTemplate {...data} />;
        }}
      />
    </div>
  );
};

export const getStaticProps = async ({ _params, _res, _req }) => {
  return {
    props: { meta, ...pageProps },
  };
};

HomePage.propTypes = HomeTemplate.propTypes;

export default HomePage;
