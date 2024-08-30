import Image from "next/image";
import Link from "next/link";

type Props = {
  max: number;
  current: number;
};

export default function ScoreBar(props: Props) {
  const { max, current } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        width: "calc(100% - 16px * 2)",
        bottom: "calc(var(--margin-from-bottom) + 16px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={"/flash.png"} alt="flash" width={24} height={24} />
        <div style={{ color: "white" }}>
          {current}/{max}
        </div>
      </div>

      <Link href={"/about"}>
        <div
          style={{
            color: "#17223E",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Boost
        </div>
      </Link>
    </div>
  );
}
