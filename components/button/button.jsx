import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const themes = {
  button: 'button',
  link: 'link',
};

const Button = forwardRef(
  ({ text, disabled, href, theme, className, children, onClick }, ref) => {
    const Element = href ? 'a' : 'button';

    const props = {
      ref,
      href,
      onClick,
      disabled,
      className: clsx('button', className, {
        [`button--${themes[theme]}`]: themes[theme],
        ['button--link']: !!href,
      }),
    };

    return (
      <>
        <Element {...props}>{text || children}</Element>
        <style jsx>{`
          .button {
            color: blue;

            &--link {
              color: red;
            }
          }
        `}</style>
      </>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
  href: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes)),
  className: PropTypes.string,
};

Button.themes = themes;

export default Button;
