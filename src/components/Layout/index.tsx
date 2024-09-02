import { type ReactNode } from "react";
import Header from "./Header";
import BottomSheetNavigationBar from "./BottomSheet";

type Props = {
  children: ReactNode;
  className: string;
  noLayout: boolean;
};

export default function Layout(props: Props) {
  const { children, className, noLayout } = props;

  return (
    <div
      className={className}
      style={{
        width: "100vw",
        height: "100%",
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
        {noLayout ? null : <Header />}

        {children}

        {noLayout ? null : <BottomSheetNavigationBar />}
      </div>
    </div>
  );
}
