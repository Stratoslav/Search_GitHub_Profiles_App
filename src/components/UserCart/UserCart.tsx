import { UserInfo } from "components/UserInfo";
import { UserStat } from "components/UserStat";
import { UserTitle } from "components/UserTitle";
import { LocalGitHubUser } from "types";
import styles from "./UserCart.module.scss";

interface UserCartProps extends LocalGitHubUser {}

export const UserCart = (props: UserCartProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.name} className={styles.avatar} />
    <UserTitle created={props.created} name={props.name} login={props.login} />
    <p className={`${styles.bio}${props.bio ? "" : styles.empty}`}>
      {props.bio || "This user hasn't bio yet"}
    </p>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
    <UserInfo
      company={props.company}
      blog={props.blog}
      location={props.location}
      twitter={props.twitter}
    />
  </div>
);
