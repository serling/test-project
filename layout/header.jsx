import { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ModalContext } from 'components/modal/modal-context';

import Button from 'components/button/button';

const Header = ({ navLinks }) => {
  const { handleModal } = useContext(ModalContext);

  const handleOnClick = () => {
    handleModal();
  };

  return (
    <>
      <div className="header">
        <div className="header__content">
          {/* {navLinks && (
            <menu className="header__menu">
              {navLinks.map((link, index) => {
                const { text, href } = link;
                return (
                  <li key={index} className="header__menu-item">
                    <Link href={href}>
                      <a>{text}</a>
                    </Link>
                  </li>
                );
              })}
            </menu>
          )} */}
          <div className="header__button">
            <Button onClick={handleOnClick} text="OPEN" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .header {
          border-bottom: 1px solid lightgrey;
          padding: 1rem 0;

          &__content {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            max-width: 980px;
            margin: 0 auto;
          }

          &__menu {
            display: flex;
            align-items: center;
          }

          &__menu-item {
            margin-right: 1rem;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      `}</style>
    </>
  );
};

Header.propTypes = { navLinks: PropTypes.array };

export default Header;
