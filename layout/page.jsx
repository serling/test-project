import PropTypes from 'prop-types';
import Head from 'next/head';

// import EventContextProvider from 'contexts/event-context-provider';
import Layout from './layout';

const Page = ({ children, title, description, theme }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8"></meta>
        <meta name="description" content={description}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      {children}
      <style jsx global>{``}</style>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.values(Layout.themes)),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Page.defaultProps = {
  title: 'generic page title',
  description: 'generic page description',
};

export default Page;
