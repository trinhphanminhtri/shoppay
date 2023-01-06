import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  console.log(cart.length);
  return (
    <div className={styles.mainHeader}>
      <div className={styles.mainHeader_container}>
        <Link className={styles.logo} href="/">
          <Image src="/logo.png" width={144} height={48} alt="logo" />
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search_icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link href="/cart" className={styles.cart}>
          <FaOpencart />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
