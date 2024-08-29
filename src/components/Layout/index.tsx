import { type ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          height: "100%",
          background: "#081529",
        }}
      >
        <Header />
        {children}
      </div>
    </div>
  );
}
