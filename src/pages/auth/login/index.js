import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    return (
        <>
            <Navbar />
            <h1>Test SignIn</h1>
        </>
    );
}
