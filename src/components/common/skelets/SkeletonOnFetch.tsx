import React from "react";

interface SkeletonOnFetchProps {
  numOfSkeletons: number;
  skeletItem: React.ReactNode;
  isLoading?: boolean;
}

const SkeletonOnFetch = ({
  numOfSkeletons,
  skeletItem,
  isLoading = true,
}: SkeletonOnFetchProps) => {
  if (isLoading) {
    numOfSkeletons === 0 ? (numOfSkeletons = 4) : numOfSkeletons;

    const skeletons = [];

    for (let i = 0; i < numOfSkeletons; i++) {
      skeletons.push(<React.Fragment key={i}>{skeletItem}</React.Fragment>);
    }
    return skeletons;
  }
};

export default SkeletonOnFetch;
