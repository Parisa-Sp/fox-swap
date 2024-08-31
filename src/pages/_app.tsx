import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/PlutoSansDPDExtraLight-Web.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlutoSansDPDLight-Web.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlutoSansDPDRegular-Web.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PlutoSansDPDThin-Web.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={myFont.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
