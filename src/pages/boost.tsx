import Image from "next/image";

export default function Boost() {
  return (
    <>
      <div style={{ color: "white", fontWeight: "bold", marginTop: "32px" }}>
        Your daily boosters :
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "8px 16px",
            alignItems: "center",
            backgroundColor: "#181A3E",
            borderRadius: "8px",
          }}
        >
          <Image src={"/flash.png"} alt={"coin"} width={32} height={32} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              color: "white",
            }}
          >
            <div>Taping Guru</div>
            <div>3/3</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "8px 24px",
            alignItems: "center",
            backgroundColor: "#181A3E",
            borderRadius: "8px",
          }}
        >
          <Image src={"/flash.png"} alt={"coin"} width={32} height={32} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              color: "white",
            }}
          >
            <div>Full Tnak</div>
            <div>3/3</div>
          </div>
        </div>
      </div>

      <div>Boosters:</div>
    </>
  );
}
