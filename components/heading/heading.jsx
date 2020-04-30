import PropTypes from 'prop-types';
import clsx from 'clsx';

const themes = {
  default: 'default',
};

const Heading = ({ level, theme, className, children, text }) => {
  const Element = `h${level}`;

  const props = {
    level,
    className: clsx(
      'heading',
      {
        [`heading--${themes[theme]}`]: themes[theme],
      },
      className
    ),
  };

  return (
    <>
      <Element {...props}>{text || children}</Element>
      <style jsx>{`
        .heading {
        }
      `}</style>
    </>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes)),
};

Heading.themes = themes;

export default Heading;
