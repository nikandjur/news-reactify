import withSkeleton from "../../helpers/hocs/withSkeleton";
import { NewsBanner } from "../NewsBanner";
import styles from "./BannersList.module.scss";

// interface BannersListProps {}

const BannersList = ({ banners }) => (
  <ul className={styles.banners}>
    {banners?.map((banner) => {
      return <NewsBanner key={banner.id} item={banner} />;
    })}
  </ul>
);
export const BannersListWithSkeleton = withSkeleton(
  BannersList,
  "banner",
  10,
  "row"
);
