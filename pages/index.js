import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Fragment } from "react";

import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/home/main";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ country }) {
  return (
    <Fragment>
      <Header country={country} />
      <div className={styles.home}>
        <div className={styles.container}>
          <Main />
        </div>
      </div>
      <Footer country={country} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const data = await axios
    .get("https://api.ipregistry.co/?key=qzwtro51336h9qq6")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(data);
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
      // country: { name: "Vietnam", flag: "" },
    },
  };
}
