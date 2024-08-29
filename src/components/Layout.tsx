import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";

export default function Layout() {
  return (
    <>
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
          <Suspense fallback={<span>Loading...</span>}>
            <Outlet />
          </Suspense>

          <Header />
          <Content />
        </div>
      </div>
    </>
  );
}
