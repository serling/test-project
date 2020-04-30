import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useSWR, { useSWRPages } from 'swr';
import { fetcher } from 'utilities/fetch-helper';
import useIsOnScreen from 'hooks/use-is-on-screen';

import Button from 'components/button/button';
import { FallbackArticleStub } from 'components/article-stub/article-stub';

const MAX_INFINITE_PAGE_COUNT = 3;
const ROOT_MARGIN = '200px';

const FallbackList = () => {
  return (
    <>
      <div className="fallback-list">
        <div className="fallback-list__list">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="fallback-list__item">
              <FallbackArticleStub />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .fallback-list {
          &__list {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-left: -1rem;
            margin-top: -1rem;
          }

          &__item {
            flex: 0 1 25%;
            padding-top: 1rem;
            padding-left: 1rem;
          }
        }
      `}</style>
    </>
  );
};

const AsyncItems = ({ items, itemRenderer, fallbackComponent }) => {
  if (!items) return null;

  return items.map((item, index) => {
    return (
      <li key={index} className="async-list__item">
        <React.Suspense fallback={fallbackComponent}>
          {itemRenderer(item)}
        </React.Suspense>
      </li>
    );
  });
};

AsyncItems.propTypes = {
  items: PropTypes.array.isRequired,
  next: PropTypes.string, //part of API response in SWR data
};

const AsyncList = ({
  id,
  buttonText,
  endpoint,
  itemRenderer,
  fallbackComponent,
}) => {
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false);

  const buttonRef = useRef(null);
  const isOnScreen = useIsOnScreen(buttonRef, ROOT_MARGIN);
  const infiniteScrollCount = useRef(0);

  const {
    pages,
    isLoadingMore,
    isReachingEnd,
    loadMore,
    pageSWRs,
    pageCount,
  } = useSWRPages(
    id,
    ({ offset, withSWR }) => {
      const url = offset || endpoint;
      const { data } = withSWR(useSWR(url, fetcher, { suspense: true }));

      if (!data) return null;

      return (
        <AsyncItems
          fallbackComponent={fallbackComponent}
          itemRenderer={itemRenderer}
          {...data}
        />
      );
    },
    (SWR) => SWR.data.next,
    []
  );

  const handleOnLoadMore = () => {
    loadMore();
    setInfiniteScrollEnabled(true);
  };

  useEffect(() => {
    if (!infiniteScrollEnabled || !isOnScreen) return;

    loadMore();

    const count = infiniteScrollCount.current + 1;

    if (count === MAX_INFINITE_PAGE_COUNT) {
      setInfiniteScrollEnabled(false);
      infiniteScrollCount.current = 0;
    } else {
      infiniteScrollCount.current = count + 1;
    }
  }, [infiniteScrollEnabled, isOnScreen]);

  return (
    <>
      <React.Suspense fallback={<FallbackList />}>
        <div className="async-list">
          <div className="async-list__content">
            <ul className="async-list__list">{pages} </ul>
          </div>
          {!isReachingEnd && buttonText && (
            <div className="async-list__actions">
              <div className="async-list__action">
                <Button
                  text={buttonText}
                  ref={buttonRef}
                  disabled={isLoadingMore}
                  onClick={handleOnLoadMore}
                />
              </div>
            </div>
          )}
        </div>

        <style jsx global>{`
          .async-list {
            &__list {
              display: flex;
              align-items: flex-start;
              flex-wrap: wrap;
              margin-left: -1rem;
              margin-top: -1rem;
            }

            &__item {
              flex: 0 1 25%;
              padding-top: 1rem;
              padding-left: 1rem;
            }

            &__actions {
              margin-top: 1rem;
              display: flex;
              justify-content: center;
            }
          }
        `}</style>
      </React.Suspense>
    </>
  );
};

AsyncList.propTypes = {
  id: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  endpoint: PropTypes.string.isRequired,
  itemRenderer: PropTypes.func.isRequired,
};

export default AsyncList;
