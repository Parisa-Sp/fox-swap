import Image from "next/image";
import TaskDetail from "./Detail";

type Props = {
  title: string;
  description: string;
  price: number;
  isCompleted?: boolean;
};

export default function TaskContent(props: Props) {
  const { description, isCompleted, price, title } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ color: "white", fontWeight: "bold" }}>{title}</div>
      <div style={{ color: "#91979E", fontSize: "14px", marginTop: "8px" }}>
        {description}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          marginTop: "32px",
          borderRadius: "8px",
          backgroundColor: "#17223E",
          padding: " 8px 16px",
          gap: "8px",
        }}
      >
        <Image src={"/dollar.png"} alt="coin" width={45} height={45} />

        <div style={{ color: "white" }}>
          <div>Reward</div>

          <div>{price}</div>
        </div>
      </div>

      {isCompleted && (
        <div
          style={{
            color: "	#3ae1bb",
            alignSelf: "center",
            marginTop: "32px",
            fontWeight: "500",
          }}
        >
          Mission is completed!
        </div>
      )}

      <div style={{ color: "white", marginTop: "32px" }}>Your tasks</div>

      <TaskDetail name="Join the Telegram chat" />

      <TaskDetail name="Follow X handle" />

      <TaskDetail name="Visit website" />
    </div>
  );
}
