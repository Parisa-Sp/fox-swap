import { SocketInstance } from "@/helpers/socket";
import type { GetTasksAck } from "@/types";
import { useEffect, useState } from "react";

export default function useGetTasks() {
  const [data, setData] = useState<GetTasksAck>();
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (SocketInstance && localStorage.getItem("token")) {
      SocketInstance.emit(
        "getTasks",
        localStorage.getItem("token"),
        (data: GetTasksAck) => {
          setData(data);
        }
      );
    } else {
      setRetry(retry + 1);
    }
  }, [retry]);

  return {
    data,
    update: () => {
      setRetry(retry + 1);
    },
  };
}
