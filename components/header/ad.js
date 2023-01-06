import Link from "next/link";
import styles from "./Header.module.scss";

const Ad = () => {
  return (
    <Link href="/">
      <div className={styles.ad}></div>
    </Link>
  );
};

export default Ad;
