import BottomSheetNavigationBarItem from "./Item";

export default function BottomSheetNavigationBar() {
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
        text={"Earn"}
        route={"/earn"}
      />
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Earn"}
        route={"/earn"}
      />
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Earn"}
        route={"/earn"}
      />
      <BottomSheetNavigationBarItem
        icon={"/diamond.png"}
        text={"Earn"}
        route={"/earn"}
      />
    </div>
  );
}
