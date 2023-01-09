import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { signOut, signIn } from "next-auth/react";

const UserMenu = ({ session }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to shoppay!</h4>
      {session ? (
        <div className={styles.flex}>
          {/* <Image
            className={styles.menu_avatar}
            // src="/icons/avatar-cartoon-profile.png"
            src={session.user.image}
            width={50}
            height={50}
            alt="avatar"
          /> */}
            <img
              className={styles.menu_avatar}
              src={session.user.image}
              alt="avatar"
            />
          <div className={styles.col}>
            <span>Welcome Back</span>
            <h3>{session.user.name}</h3>
            <span onClick={()=>signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outline} onClick={()=>signIn()}>Login</button>
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
