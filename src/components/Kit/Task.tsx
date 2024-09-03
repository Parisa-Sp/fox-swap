import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  count: number;
  route: string;
};

export default function Task(props: Props) {
  const { title, count, route } = props;
  return (
    <Link
      href={route}
      style={{
        display: "flex",
        gap: "4px",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#17223E",
        borderRadius: "8px",
        color: "white",
        marginBottom: "8px",
      }}
    >
      <div style={{ display: "flex", gap: "16px", margin: "8px" }}>
        <Image src={"/done.png"} alt="done" width={50} height={50} />
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div>{title}</div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Image src={"/dollar.png"} alt="coin" width={24} height={24} />
            <div>{count}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
