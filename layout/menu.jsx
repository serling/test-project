import PropTypes from 'prop-types';

const Menu = ({}) => {
  return (
    <>
      <div className="menu">
        <div className="menu__content">menu content</div>
      </div>
      <style jsx>
        {`
          .menu {
            &__content {
            }
          }
        `}
      </style>
    </>
  );
};

Menu.propTypes = {};

export default Menu;
