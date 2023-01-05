import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Fragment } from "react";


import styles from "../styles/Home.module.scss";
import Header from "../components/header";

// const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <Fragment>
      <Header/>
    </Fragment>
  );
}
