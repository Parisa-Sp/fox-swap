import Image from "next/image";
import { useState } from "react";
import BottomSheet from "../Kit/BottomSheet";
import BottomSheetContent from "./Content";

type Props = {
  image: string;
  title: string;
  price: string;
  level: number;
};
export default function BoostItem(props: Props) {
  const { image, level, price, title } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BottomSheetContent
          alt="Multitap"
          src="/dollar.png"
          title="Multitap"
          description="Increase amount of TAP you can earn per one tap. +1 per tap for each level."
          price={600000}
          level={1}
        />
      </BottomSheet>

      <div
        style={{
          display: "flex",
          gap: "8px",
          padding: "8px 16px",
          alignItems: "center",
          backgroundColor: "#181A3E",
          borderRadius: "8px",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Image src={image} alt={"Boost Item"} width={32} height={32} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            color: "white",
          }}
        >
          <div>{title}</div>

          <div style={{ display: "flex", gap: "4px" }}>
            <Image src={"/dollar.png"} width={16} height={16} alt="alt" />
            <span style={{ fontSize: "12px" }}>{price}</span>

            {level ? (
              <>
                <span style={{ color: "#586072", fontSize: "12px" }}>|</span>{" "}
                <span style={{ color: "#586072", fontSize: "12px" }}>
                  {level} level
                </span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
