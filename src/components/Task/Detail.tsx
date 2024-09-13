import { SocketInstance } from "@/helpers/socket";
import type { GetInfoAck } from "@/types";

type Props = {
  name: string;
  id: string;
  url: string;
  isDone: boolean;
  update: VoidFunction;
};
export default function TaskDetail(props: Props) {
  const { name, isDone, id, url, update } = props;

  return (
    <div
      style={{
        marginTop: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px",
        backgroundColor: "#17223E",
        padding: " 12px 16px",
        gap: "12px",
        color: "white",
      }}
    >
      {name}

      {isDone ? (
        <div style={{ color: "green", fontSize: "12px" }}>Done</div>
      ) : (
        <button
          onClick={() => {
            window.open(url, "_blank");

            setTimeout(() => {
              SocketInstance?.emit(
                "doneTask",
                localStorage.getItem("token"),
                id,
                (data: GetInfoAck) => {
                  if (data.balance) {
                    update();
                  }
                }
              );
            }, 10000);
          }}
          style={{
            padding: "6px 10px",
            color: "black",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          Check
        </button>
      )}
    </div>
  );
}
