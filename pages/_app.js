import "../styles/globals.css";
// import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <Component {...pageProps} />;
}

export default MyApp;
