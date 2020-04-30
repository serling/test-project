import { header, footer } from 'data/layout';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import Header from './header';
import Footer from './footer';

const themes = {
  default: 'default',
};

const Layout = ({ theme, children }) => {
  return (
    <>
      <div
        className={clsx('layout', {
          [`layout--${themes[theme]}`]: themes[theme],
        })}
      >
        <header className="layout__header">
          <Header {...header} />
        </header>
        <main className="layout__content">
          <div className="layout__inner">{children}</div>
        </main>
        <footer className="layout__footer">
          <Footer {...footer} />
        </footer>
      </div>
      <style jsx>{`
        .layout {
          $self: &;
          min-height: 100vh;

          &__content {
            padding: 1rem 0;
          }

          &--default {
            display: flex;
            flex-direction: column;

            #{$self}__content {
            }

            #{$self}__inner {
              max-width: 980px;
              margin: 0 auto;
            }

            #{$self}__footer {
              margin-top: auto;
            }
          }
        }
      `}</style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.values(themes)),
};

Layout.defaultProps = {
  theme: themes.default,
};

Layout.themes = themes;

export default Layout;
