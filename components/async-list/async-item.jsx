import PropTypes from 'prop-types';
import useSWR from 'swr';
import { fetcher } from 'utilities/fetch-helper';

const AsyncItem = ({ endpoint, itemRenderer }) => {
  const { data } = useSWR(endpoint, fetcher, { suspense: true });

  return itemRenderer(data);
};

AsyncItem.propTypes = {
  endpoint: PropTypes.string.isRequired,
  itemRenderer: PropTypes.func.isRequired,
  fallbackComponent: PropTypes.node,
};

export default AsyncItem;
