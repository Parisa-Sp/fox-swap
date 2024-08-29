import Image from "next/image";
import { CSSProperties } from "react";

type Props = {
  name: string;
  src: string;
  alt: string;
};

export default function Avatar(props: Props) {
  const { src, name, alt } = props;

  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div
        style={{
          borderRadius: "8px",

          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#17223E",
        }}
      >
        <Image src={src} alt={alt} width={16} height={16} />
      </div>
      <div style={{ color: "white" }}>{name}</div>
    </div>
  );
}
