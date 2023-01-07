import styles from "./Header.module.scss";
import Ad from "./Ad";
import Top from "./Top";
import MainHeader from "./Main";

const Header = ({country}) => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top country={country} />
      <MainHeader />
    </header>
  );
};

export default Header;
