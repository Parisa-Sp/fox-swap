import { SocketInstance } from "@/helpers/socket";
import { GetInfoAck } from "@/types";
import Image from "next/image";
import { useState } from "react";

type Props = {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  level: number;
  onClose: VoidFunction;
};

export default function BottomSheetContent(props: Props) {
  const { src, description, price, title, alt, level, id, onClose } = props;

  const [isDisabled, setDisabled] = useState(false);

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

        {id !== "offlineBot" ? (
          <>
            <span style={{ fontSize: "14px" }}> | </span>
            <span style={{ fontSize: "14px" }}>{level} level</span>
          </>
        ) : null}
      </div>

      <button
        onClick={() => {
          setDisabled(true);

          SocketInstance?.emit(
            "upgrade",
            localStorage.getItem("token"),
            id,
            (data: GetInfoAck) => {
              if (data.balance >= 0) {
                onClose();
              }

              setDisabled(false);
            }
          );
        }}
        disabled={isDisabled}
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
