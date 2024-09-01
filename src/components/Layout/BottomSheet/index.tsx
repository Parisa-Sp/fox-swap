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
      <BottomSheetNavigationBarItem icon={"hammer"} text={"Mine"} route={"/"} />
      <BottomSheetNavigationBarItem
        icon={"checkmark"}
        text={"Tasks"}
        route={"/tasks"}
      />
      <BottomSheetNavigationBarItem
        icon={"invite"}
        text={"Invite"}
        route={"/invite"}
      />
      <BottomSheetNavigationBarItem
        icon={"coin-dollar"}
        text={"Stats"}
        route={"/stats"}
      />
    </div>
  );
}
