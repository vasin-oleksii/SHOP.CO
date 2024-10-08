import CardPreviewSkelet from "./CardPreviewSkelet";

interface SkeletonOnFetchProps {
  numOfSkeletons: number;
  isLoading: boolean;
}

const SkeletonOnFetch = ({
  numOfSkeletons,
  isLoading,
}: SkeletonOnFetchProps) => {
  if (isLoading) {
    numOfSkeletons === 0 ? (numOfSkeletons = 4) : numOfSkeletons;

    const skeletons = [];

    for (let i = 0; i < numOfSkeletons; i++) {
      skeletons.push(<CardPreviewSkelet key={i} />);
    }
    return skeletons;
  }
  return;
};

export default SkeletonOnFetch;
