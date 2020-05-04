import PropTypes from 'prop-types';

const Footer = ({}) => {
  return (
    <>
      <div className="footer">
        <div className="footer__content">Footer content</div>
      </div>
      <style jsx>
        {`
          .footer {
            padding: 1rem 0;
            border-top: 1px solid lightgray;
            background-color: #3a3939;
            color: white;

            &__content {
              padding: 0 0.5rem;

              max-width: 980px;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
