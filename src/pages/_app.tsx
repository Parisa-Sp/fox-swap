import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "../../public/fonts/SanFrancisco.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
