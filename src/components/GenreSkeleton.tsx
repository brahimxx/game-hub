import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <Card height="31px" marginY="5px" overflow="hidden">
      <Skeleton />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GenreSkeleton;
