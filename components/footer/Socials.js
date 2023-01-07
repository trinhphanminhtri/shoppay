import Link from "next/link";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsPinterest, BsSnapchat, BsTwitter, BsYoutube } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className={styles.footer_socials}>
      <section>
        <h3>STAY CONNECTED</h3>
        <ul>
          <li>
            <Link href="/" target="_blank">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <BsInstagram />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <BsTwitter />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <BsYoutube />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <BsPinterest />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <BsSnapchat />
            </Link>
          </li>
          <li>
            <Link href="/" target="_blank">
              <FaTiktok />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Socials;
