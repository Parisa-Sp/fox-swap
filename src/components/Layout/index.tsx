import { type ReactNode } from "react";
import Header from "./Header";
import BottomSheetNavigationBar from "./BottomSheet";
import ScoreBar from "../Home/ScoreBar";

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
          maxWidth: "512px",
          height: "100%",
          background: "#081529",
          padding: "32px 16px",
        }}
      >
        <Header />

        {children}

        <BottomSheetNavigationBar />
        <ScoreBar />
      </div>
    </div>
  );
}
