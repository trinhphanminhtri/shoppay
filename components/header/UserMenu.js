import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to shoppay!</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <Image
            className={styles.menu_avatar}
            src="/icons/avatar-cartoon-profile.png"
            width={50}
            height={50}
            alt="avatar"
          />
          <div className={styles.col}>
            <span>Welcome Back</span>
            <h3>ANTHONY</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outline}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Messenger Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
