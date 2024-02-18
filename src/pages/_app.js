import "@/styles/globals.css";
import dynamic from "next/dynamic";


const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default dynamic (() => Promise.resolve(App), {ssr: false})
