export default function Loading() {
  return (
    <div
      style={{
        minHeight: "70vh",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loader" />
    </div>
  );
}
