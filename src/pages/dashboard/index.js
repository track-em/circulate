import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import secureLocalStorage from "react-secure-storage";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    // secureLocalStorage.setItem supports 'String - Object - Number - Boolean' as value
    useEffect(() => {
        secureLocalStorage.setItem("key-name", {
            message: "This is testing of local storage",
        });
        secureLocalStorage.setItem("number", 12);
        secureLocalStorage.setItem("string", "12");
        secureLocalStorage.setItem("boolean", true);
        let value = secureLocalStorage.getItem("boolean");
        console.log(value);
    }, []);

    return (
        <div>
            This is a sample code
        </div>
    );
};
