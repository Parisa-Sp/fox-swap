import Image from "next/image";
import Link from "next/link";

type Props = {
  icon: string;
  text: string;
  route: string;
};

export default function BottomSheetNavigationBarItem(props: Props) {
  const { icon, text, route } = props;

  return (
    <Link
      href={route}
      style={{
        width: "32px",
        height: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
      }}
    >
      <Image src={icon} alt={text} width={20} height={20} />
      <div style={{ color: "white", fontSize: "12px" }}>{text}</div>
    </Link>
  );
}
