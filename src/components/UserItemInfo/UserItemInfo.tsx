import { ReactNode } from "react";
import styles from "./UserItemInfo.module.scss";

export interface UserItemInfoProps {
  icon: ReactNode;
  text: string | null;
  isLink?: boolean;
}

export const UserItemInfo = ({ icon, text, isLink }: UserItemInfoProps) => {
  const currentText = text || "Not Available";
  let currentHref = "";
  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `http://${text}`;
  }
  return (
    <div className={`${styles.userItem}${text ? "" : `${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};
