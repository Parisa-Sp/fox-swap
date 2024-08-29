import Image from "next/image";

export default function ScoreBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "90%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <Image src={"/dollar.png"} alt="coin" width={24} height={24} />
        <div style={{ color: "white" }}> 6000/6000</div>
      </div>

      <div
        style={{
          color: "white",
          backgroundColor: "#17223E",
          borderRadius: "8px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Boost
      </div>
    </div>
  );
}
