import React from 'react';

interface StatusProps {
  loading: boolean;
  error: string | null;
  data: any;
  checked: boolean;
}

const Status: React.FC<StatusProps> = ({ loading, error, data, checked }) => {
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (data && !loading && !checked) {
    return <div>{data?.items.length} Result(s)</div>;
  }

  return null;
};

export default Status;
