import { useRouter } from "next/router";
import BottomSheetNavigationBarItem from "./Item";

export default function BottomSheetNavigationBar() {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#17223E",
        borderRadius: "16px",
        width: "calc(100% - 16px * 2)",
        padding: "16px 32px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        bottom: "32px",
      }}
    >
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Mine"}
        route={"/mine"}
      />
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Tasks"}
        route={"/tasks"}
      />
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Invite"}
        route={"/invite"}
      />
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Stats"}
        route={"/stats"}
      />
    </div>
  );
}
