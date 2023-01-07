import styles from "./home-main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <div className={styles.menu}>menu</div>
      <div className={styles.swiper}>swiper</div>
      <div className={styles.offers}>offers</div>
      <div className={styles.user}>user</div>
    </div>
  );
};

export default Main;
