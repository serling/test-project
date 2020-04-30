// import isServer from 'utilities/is-server';
// import PropTypes from 'prop-types';
import Page from 'layout/page';
import Layout from 'layout/layout';

const MyApp = ({ Component, pageProps }) => {
  const { meta, ...rest } = pageProps;

  return (
    <>
      <Page {...meta}>
        <Layout theme={Layout.themes.default}>
          <Component {...rest} />
        </Layout>
      </Page>

      <style jsx global>{`
        html {
          box-sizing: border-box;
          line-height: 1.15;
          min-height: 100vh;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: transparent;
        }

        body {
          min-height: 100vh;

          #__app {
            min-height: 100vh;
          }
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        @-ms-viewport {
          width: device-width;
        }

        article,
        aside,
        dialog,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section {
          display: block;
        }

        body {
          margin: 0;
          font-family: Segoe UI;
          font-size: 1rem;
          font-weight: normal;
          line-height: 1.5;
          color: #212529;
          text-align: left;
          background-color: #fff;
        }

        [tabindex='-1']:focus {
          outline: none !important;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }
        abbr[title],
        abbr[data-original-title] {
          text-decoration: underline;
          -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
          cursor: help;
          border-bottom: 0;
        }
        address {
          margin: 0;
          font-style: normal;
          line-height: inherit;
        }

        ol,
        ul,
        dl,
        menu,
        ol ol,
        ul ul,
        ol ul,
        ul ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        dt {
          font-weight: bold;
        }

        dd {
          margin-bottom: 0.5rem;
          margin-left: 0;
        }

        blockquote {
          margin: 0 0 1rem;
        }

        dfn {
          font-style: italic;
        }

        b,
        strong {
          font-weight: bolder;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        a {
          color: #007bff;
          text-decoration: none;
          background-color: transparent;
          -webkit-text-decoration-skip: objects;

          &:hover {
            color: #0056b3;
            text-decoration: underline;
          }

          &:not([href]):not([tabindex]) {
            color: inherit;
            text-decoration: none;
          }

          &:not([href]):not([tabindex]):focus,
          a:not([href]):not([tabindex]):hover {
            color: inherit;
            text-decoration: none;
          }

          &:not([href]):not([tabindex]):focus {
            outline: 0;
          }
        }

        pre,
        code,
        kbd,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }

        pre {
          margin-top: 0;
          margin-bottom: 1rem;
          overflow: auto;
          -ms-overflow-style: scrollbar;
        }

        figure {
          margin: 0 0 1rem;
        }

        img {
          vertical-align: middle;
          border-style: none;
        }

        svg:not(:root) {
          overflow: hidden;
        }

        a,
        area,
        button,
        [role='button'],
        input:not([type='range']),
        label,
        select,
        summary,
        textarea {
          -ms-touch-action: manipulation;
          touch-action: manipulation;
        }

        table {
          border-collapse: collapse;
        }

        caption {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          color: #868e96;
          text-align: left;
          caption-side: bottom;
        }

        th {
          text-align: inherit;
        }

        label {
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        button {
          border-radius: 0;

          &:focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color;
          }
        }

        input,
        button,
        select,
        optgroup,
        textarea {
          margin: 0;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
        }

        button,
        input {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        button,
        html [type='button'],
        [type='reset'],
        [type='submit'] {
          -webkit-appearance: button;
        }

        button::-moz-focus-inner,
        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }

        input[type='radio'],
        input[type='checkbox'] {
          box-sizing: border-box;
          padding: 0;
        }

        input[type='date'],
        input[type='time'],
        input[type='datetime-local'],
        input[type='month'] {
          -webkit-appearance: listbox;
        }

        textarea {
          overflow: auto;
          resize: vertical;
        }

        fieldset {
          min-width: 0;
          padding: 0;
          margin: 0;
          border: 0;
        }

        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          line-height: inherit;
          color: inherit;
          white-space: normal;
        }

        progress {
          vertical-align: baseline;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }

        [type='search']::-webkit-search-cancel-button,
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }

        output {
          display: inline-block;
        }

        summary {
          display: list-item;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none !important;
        }
      `}</style>
    </>
  );
};

// MyApp.propTypes = {
//   meta: PropTypes.object.isRequired,
//   content: PropTypes.object.isRequired,
// };

export default MyApp;
