import Link from "next/link";
import styles from "./Footer.module.scss";

const NewsLetter = () => {
  return (
    <div className={styles.footer_newsLetter}>
      <h3>Sign up for our newsletter</h3>
      <div className={styles.footer_flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.btn_primary}>SUBSCRIBE</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreeing to <Link href="/">our Privacy & Cookie Policy</Link>
      </p>
    </div>
  );
};

export default NewsLetter;
