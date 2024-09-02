import Link from "next/link";

type Props = {
  icon: string;
  text: string;
  route: string;
};

export default function BottomNavigationBarItem(props: Props) {
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
      <i
        className={`icon-${icon}`}
        style={{ fontSize: "20px", color: "white" }}
      />
      <div style={{ color: "white", fontSize: "12px" }}>{text}</div>
    </Link>
  );
}
