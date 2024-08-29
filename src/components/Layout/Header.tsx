import Avatar from "../Kit/Avatar";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Avatar name="Mamad" src="/avatar.png" alt="Avatar" />
    </div>
  );
}
