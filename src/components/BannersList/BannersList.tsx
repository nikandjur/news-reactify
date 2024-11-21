import withSkeleton from "../../helpers/hocs/withSkeleton";
import { INews } from "../../interfaces";
import { NewsBanner } from "../NewsBanner";
import styles from "./BannersList.module.scss";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => (
  <ul className={styles.banners}>
    {banners?.map((banner) => {
      return <NewsBanner key={banner.id} item={banner} />;
    })}
  </ul>
);
export const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row"
);
