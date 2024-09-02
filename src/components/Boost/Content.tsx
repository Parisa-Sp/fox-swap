import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  level: number;
};

export default function BottonSheetContent(props: Props) {
  const { src, description, price, title, alt, level } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        backgroundColor: "#181a3e",
        padding: "32px",
      }}
    >
      <Image alt={alt} src={src} width={24} height={24} />
      <div style={{ color: "white", fontWeight: "bold" }}>{title}</div>
      <div style={{ color: "#586072", textAlign: "center" }}>{description}</div>

      <div style={{ color: "white" }}>
        <span style={{ fontSize: "12px" }}>{price}</span>

        {level ? (
          <>
            <span style={{ fontSize: "14px" }}> | </span>
            <span style={{ fontSize: "14px" }}>{level} level</span>
          </>
        ) : null}
      </div>

      <button
        style={{
          padding: "16px",
          backgroundColor: "#1F26B2",
          color: "white",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        Get it!
      </button>
    </div>
  );
}
