import BoostItem from "@/components/Boost/Item";
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
          gap: "8px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            flex: "1",
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
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Taping Guru
            </div>
            <div>3/3</div>
          </div>
        </div>

        <div
          style={{
            flex: "1",
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
            <div>Full Tank</div>
            <div>3/3</div>
          </div>
        </div>
      </div>

      <div style={{ color: "white", fontWeight: "bold", marginTop: "32px" }}>
        Boosters:
      </div>

      <div
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <BoostItem
          image="/flash.png"
          level={10}
          price="100000"
          title="Taping Guru"
        />
        <BoostItem
          image="/flash.png"
          level={10}
          price="100000"
          title="Taping Guru"
        />
        <BoostItem
          image="/flash.png"
          level={10}
          price="100000"
          title="Taping Guru"
        />
        <BoostItem
          image="/flash.png"
          level={10}
          price="100000"
          title="Taping Guru"
        />
      </div>
    </>
  );
}
