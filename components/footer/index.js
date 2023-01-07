import Copyright from "./Copyright";
import styles from "./Footer.module.scss";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import Payment from "./Payment";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <Links />
        <Socials />
        <NewsLetter />
        <Payment />
        <Copyright/>
      </div>
    </footer>
  );
};

export default Footer;
