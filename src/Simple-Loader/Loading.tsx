import React from "react";

export interface LoadingProps {
  loading?: boolean;
}

const Loading = ({ loading = true }: LoadingProps): JSX.Element | null => {
  if (!loading) {
    return null;
  }
  return <div>Loading....</div>;
};

export default Loading;
