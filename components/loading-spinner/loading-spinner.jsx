import clsx from 'clsx';
import PropTypes from 'prop-types';

const sizes = {
  large: 'large',
};

const LoadingSpinner = ({ size }) => {
  return (
    <>
      <div
        className={clsx('loading-spinner', {
          [`loading-spinner--${sizes[size]}`]: sizes[size],
        })}
      >
        <div className="loading-spinner__spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx global>
        {`
          .loading-spinner {
            $self: &;

            &--large {
              #{$self}__spinner {
                width: 80px;
                height: 80px;
              }
            }

            &__spinner {
              display: inline-block;
              position: relative;

              @keyframes lds-ellipsis1 {
                0% {
                  transform: scale(0);
                }
                100% {
                  transform: scale(1);
                }
              }

              @keyframes lds-ellipsis3 {
                0% {
                  transform: scale(1);
                }
                100% {
                  transform: scale(0);
                }
              }

              @keyframes lds-ellipsis2 {
                0% {
                  transform: translate(0, 0);
                }
                100% {
                  transform: translate(24px, 0);
                }
              }

              div {
                position: absolute;
                top: 33px;
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background: #000;
                animation-timing-function: cubic-bezier(0, 1, 1, 0);

                &:nth-child(1) {
                  left: 8px;
                  animation: lds-ellipsis1 0.6s infinite;
                }

                &:nth-child(2) {
                  left: 8px;
                  animation: lds-ellipsis2 0.6s infinite;
                }

                &:nth-child(3) {
                  left: 32px;
                  animation: lds-ellipsis2 0.6s infinite;
                }

                &:nth-child(4) {
                  left: 56px;
                  animation: lds-ellipsis3 0.6s infinite;
                }
              }
            }
          }
        `}
      </style>
    </>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
};

LoadingSpinner.defaultProps = {
  size: sizes.large,
};

LoadingSpinner.sizes = sizes;

export default LoadingSpinner;
