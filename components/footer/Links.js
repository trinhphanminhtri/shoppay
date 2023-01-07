const links = [
  {
    heading: "SHOPPAY",
    paths: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Contact us",
        link: "",
      },
      {
        name: "Social Responsibility",
        link: "",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    paths: [
      {
        name: "Shipping Info",
        link: "",
      },
      {
        name: "Returns",
        link: "",
      },
      {
        name: "How To Order",
        link: "",
      },
      {
        name: "How To Track",
        link: "",
      },
      {
        name: "Size Guide",
        link: "",
      },
    ],
  },
  {
    heading: "Customer service",
    paths: [
      {
        name: "Customer service",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Consumers (Transactions)",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

const Links = () => {
  return (
    <div className={styles.footer_links}>
      {links.map((item, index) => (
        <ul key={item.heading}>
          {index === 0 ? (
            <Image src="/logo.png" width={140} height={44} alt="logo" />
          ) : (
            <strong>{item.heading}</strong>
          )}
          {item.paths.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Links;
