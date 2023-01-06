import styles from "./Header.module.scss";
import Ad from "./Ad";
import Top from "./Top";
import MainHeader from "./Main";

const Header = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
      <MainHeader />
    </header>
  );
};

export default Header;
