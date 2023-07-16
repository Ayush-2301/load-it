import React from "react";

export interface SkeletonProps {
  loading?: boolean;
}

const Skeleton = ({ loading = true }: SkeletonProps): JSX.Element | null => {
  if (!loading) {
    return null;
  }
  return <div>Loading....</div>;
};

export default Skeleton;
