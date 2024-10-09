interface SkeletonOnFetchProps {
  numOfSkeletons: number;
  isLoading: boolean;
  skeletItem: React.ReactNode;
}

const SkeletonOnFetch = ({
  numOfSkeletons,
  isLoading,
  skeletItem,
}: SkeletonOnFetchProps) => {
  if (isLoading) {
    numOfSkeletons === 0 ? (numOfSkeletons = 4) : numOfSkeletons;

    const skeletons = [];

    for (let i = 0; i < numOfSkeletons; i++) {
      //   skeletons.push(<CardPreviewSkelet key={i} />);
      skeletons.push(<div key={i}>{skeletItem}</div>);
    }
    return skeletons;
  }
  return;
};

export default SkeletonOnFetch;
