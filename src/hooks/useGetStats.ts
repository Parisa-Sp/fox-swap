import { SocketInstance } from "@/helpers/socket";
import type { GetStatsAck } from "@/types";
import { useEffect, useState } from "react";

export default function useGetStats() {
  const [data, setData] = useState<GetStatsAck>();
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    if (SocketInstance && localStorage.getItem("token")) {
      SocketInstance.emit(
        "getStates",
        localStorage.getItem("token"),
        (data: GetStatsAck) => {
          setData(data);
        }
      );
    } else {
      setRetry(retry + 1);
    }
  }, [retry]);

  return { data };
}
