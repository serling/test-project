import { fetcher } from 'utilities/fetch-helper';
import useSWR from 'swr';
import LoadingSpinner from 'components/loading-spinner/loading-spinner';

const AsyncPageContent = ({ endpoint, itemRenderer, ...props }) => {
  const { data, error } = useSWR(endpoint, fetcher, { props });

  if (error) return null;

  if (!data) return <LoadingSpinner />;

  return itemRenderer(data);
};

export default AsyncPageContent;
