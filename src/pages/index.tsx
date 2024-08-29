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

      <div
        style={{
          backgroundColor: "#17223E",
          borderRadius: "16px",
          marginTop: "96px",
          width: "90%",
          padding: "24px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <Image src={"/diamond.png"} alt={"diamond"} width={20} height={20} />
          <div style={{ color: "white" }}>Earn</div>
        </div>

        <div
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <Image src={"/diamond.png"} alt={"diamond"} width={20} height={20} />
          <div style={{ color: "white" }}>Earn</div>
        </div>

        <div
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <Image src={"/diamond.png"} alt={"diamond"} width={20} height={20} />
          <div style={{ color: "white" }}>Earn</div>
        </div>

        <div
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <Image src={"/diamond.png"} alt={"diamond"} width={20} height={20} />
          <div style={{ color: "white" }}>Earn</div>
        </div>

        <div
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <Image src={"/diamond.png"} alt={"diamond"} width={20} height={20} />
          <div style={{ color: "white" }}>Earn</div>
        </div>
      </div>
    </div>
  );
}
