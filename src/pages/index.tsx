import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "128px",
        }}
      >
        <Image
          style={{ cursor: "pointer" }}
          src={"/dollar.png"}
          alt={"coin"}
          width={200}
          height={200}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        />
      </div>

      <div
        style={{
          marginTop: "64px",
          display: "flex",
          gap: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={"/dollar.png"} alt="coin" width={24} height={24} />
        <div style={{ color: "white" }}>{count}</div>
      </div>
    </div>
  );
}
