const data = [
  {
    name: "Privacy Center",
    link: "",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "",
  },
  {
    name: "Manage Cookies",
    link: "",
  },
  {
    name: "Terms & Conditions",
    link: "",
  },
  {
    name: "Copyright Notice",
    link: "",
  },
];

import styles from "./Footer.module.scss";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footer_copyright}>
      <section>©{currentYear} BENISON All Right Reserved.</section>
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/">
            <IoLocationSharp /> Vietnam
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Copyright;
