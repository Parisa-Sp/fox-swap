import Image from "next/image";
import Avatar from "../Kit/Avatar";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          padding: "8px",
          margin: "32px",
        }}
      >
        <Avatar name="Mamad" src="/avatar.png" alt="Avatar" />
      </div>

      <div
        style={{
          padding: "8px",
          borderRadius: "8px",
          backgroundColor: "#181A3E",
          width: "auto",
          height: "40px",
          margin: "32px",
          display: "flex",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <Image
          style={{ borderRadius: "8px" }}
          src={"/tonkeeper.webp"}
          width={32}
          height={32}
          alt={"tonekeeper"}
        />
        <div style={{ color: "white" }}>Tonkeeper</div>
      </div>
    </div>
  );
}
