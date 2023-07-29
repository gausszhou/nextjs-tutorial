import Link from "next/link";
import styles from "./LinkButton.module.css";

const LinkButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default LinkButton;