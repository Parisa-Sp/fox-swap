import BoostItem from "@/components/Boost/Item";
import { SocketInstance } from "@/helpers/socket";
import type { GetUpgradesAck } from "@/types";
import { useEffect, useState } from "react";

export default function Boost() {
  const [data, setData] = useState<GetUpgradesAck[]>([]);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (SocketInstance && localStorage.getItem("token")) {
      SocketInstance.emit(
        "getUpgrades",
        localStorage.getItem("token"),
        (data: GetUpgradesAck[]) => {
          console.log(data);

          setData(data);
        }
      );
    } else {
      setRetry(retry + 1);
    }
  }, [retry]);

  return (
    <>
      {/* <div style={{ color: "white", fontWeight: "bold", marginTop: "32px" }}>
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
      </div> */}

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
        {data.map((item) => (
          <BoostItem
            update={() => {
              setRetry(retry + 1);
            }}
            key={item.id}
            id={item.id}
            image="/flash.png"
            level={item.userLevel}
            price={String(item.cost)}
            title={item.name}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
