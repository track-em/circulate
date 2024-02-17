import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import secureLocalStorage from "react-secure-storage";

export default function Create() {
    console.log(secureLocalStorage.getItem("key-name"))
    console.log(secureLocalStorage.getItem("number"))
    return (
        <>
            <h1>Create</h1>
            <a href="dashboard">Create</a>
        </>
    );
}
