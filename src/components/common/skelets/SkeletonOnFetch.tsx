interface SkeletonOnFetchProps {
  numOfSkeletons: number;
  skeletItem: React.ReactNode;
}

const SkeletonOnFetch = ({
  numOfSkeletons,
  skeletItem,
}: SkeletonOnFetchProps) => {
  numOfSkeletons === 0 ? (numOfSkeletons = 4) : numOfSkeletons;

  const skeletons = [];

  for (let i = 0; i < numOfSkeletons; i++) {
    skeletons.push(<div key={i}>{skeletItem}</div>);
  }
  return skeletons;
};

export default SkeletonOnFetch;
