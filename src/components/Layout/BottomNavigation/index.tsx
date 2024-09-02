import BottomNavigationBarItem from "./Item";

export default function BottomNavigationBar() {
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
      <BottomNavigationBarItem icon={"hammer"} text={"Mine"} route={"/"} />
      <BottomNavigationBarItem
        icon={"checkmark"}
        text={"Tasks"}
        route={"/tasks"}
      />
      <BottomNavigationBarItem
        icon={"invite"}
        text={"Invite"}
        route={"/invite"}
      />
      <BottomNavigationBarItem
        icon={"coin-dollar"}
        text={"Stats"}
        route={"/stats"}
      />
    </div>
  );
}
