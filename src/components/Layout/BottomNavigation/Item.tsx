import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  icon: string;
  text: string;
  route: string;
};

export default function BottomNavigationBarItem(props: Props) {
  const { icon, text, route } = props;

  const path = usePathname();

  const isActive = path === route;

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
        style={{ fontSize: "20px", color: isActive ? "blue" : "white" }}
      />

      <div style={{ color: isActive ? "blue" : "white", fontSize: "12px" }}>
        {text}
      </div>
    </Link>
  );
}
