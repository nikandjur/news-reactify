import { Skeleton } from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, type, count, direction) {
  return function ComponentWithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...restProps} />;
  };
}
export default withSkeleton;
