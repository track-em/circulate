import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Logout() {
    return (
        <>
            <Navbar />
            <h1>Test SignUp</h1>
        </>
    );
}
