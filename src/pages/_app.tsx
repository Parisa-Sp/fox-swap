import Layout from "@/components/Layout";
import { SocketHelper } from "@/helpers/socket";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useEffect } from "react";
import { io } from "socket.io-client";

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

type Props = AppProps & { Component: { noLayout: boolean } };

export default function App({ Component, pageProps }: Props) {
  const noLayout = Component.noLayout;

  useEffect(() => {
    SocketHelper.connect();

    return () => {
      SocketHelper.disconnect();
    };
  }, []);

  return (
    <Layout className={myFont.className} noLayout={noLayout}>
      <div style={{ paddingBottom: "var(--margin-from-bottom)" }}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
