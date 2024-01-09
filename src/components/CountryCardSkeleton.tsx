import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CountryCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="290px" />
      <CardBody>
        <SkeletonText height="150px" />
      </CardBody>
    </Card>
  );
};

export default CountryCardSkeleton;
