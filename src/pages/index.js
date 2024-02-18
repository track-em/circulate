import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>main title</h1>
      <h3>sub-header title</h3>
      <input type=""></input>
      <a>Proceed to demo app</a>
    </>        

  );
}
