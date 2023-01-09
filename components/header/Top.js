import Link from "next/link";
import Image from "next/image";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";
import { useSession } from "next-auth/react";
import styles from "./Header.module.scss";
import UserMenu from "./UserMenu";

const Top = ({ country }) => {
  const { data: session } = useSession();
  // const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <Link href="/">
      <div className={styles.top}>
        <div className={styles.top_Container}>
          <div></div>
          <ul className={styles.top_List}>
            <li className={styles.li}>
              <Image
                // src="/vietnam-flag-png.png"
                src={country.flag}
                alt="flag"
                width={28}
                height={28}
              />
              <span>{country.name}&nbsp;/&nbsp;vnđ</span>
            </li>
            <li className={styles.li}>
              <MdSecurity />
              <span>Buyer Protection</span>
            </li>
            <li className={styles.li}>
              <span>Customer Service</span>
            </li>
            <li className={styles.li}>
              <span>Help</span>
            </li>
            <li className={styles.li}>
              <BsSuitHeart />
              <span>Whishlist</span>
            </li>
            <li
              className={styles.li}
              onMouseOver={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
            >
              {session ? (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    {/* <Image
                      src="/icons/avatar-cartoon-profile.png"
                      width={10}
                      height={10}
                      alt="avatar"
                    /> */}
                    <img src={session.user.image} alt="avatar"/>
                    <Link href="/">
                      <span>{session.user.name}</span>
                    </Link>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              ) : (
                <li>
                  <div className={styles.flex}>
                    <RiAccountPinCircleLine />
                    <Link href="/">
                      <span>Account</span>
                    </Link>
                    <RiArrowDropDownFill />
                  </div>
                </li>
              )}
              {/* {visible && <UserMenu loggedIn={loggedIn} />} */}
              {visible && <UserMenu session={session} />}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default Top;
