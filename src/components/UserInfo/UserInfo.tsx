import styles from "./UserInfo.module.scss";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as BlogIcon } from "../../assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";
import { LocalGitHubUser } from "types";
import { UserItemInfo, UserItemInfoProps } from "components/UserItemInfo";
interface UserInfoProps
  extends Pick<LocalGitHubUser, "company" | "blog" | "location" | "twitter"> {}

export const UserInfo = ({
  company,
  location,
  blog,
  twitter,
}: UserInfoProps) => {
  const item: UserItemInfoProps[] = [
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <LocationIcon />,
      text: location,
    },
  ];

  return (
    <div className={styles.userInfo} data-testid="UserInfo">
      {item.map((i, index) => (
        <UserItemInfo {...i} key={index} />
      ))}
    </div>
  );
};
