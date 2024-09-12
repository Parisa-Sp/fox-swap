import ScoreBar from "@/components/Home/ScoreBar";
import { SocketInstance } from "@/helpers/socket";
import type { GetInfoAck, GetMaxAck } from "@/types";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  const [retry, setRetry] = useState(0);

  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (interval.current) clearInterval(interval.current);

    interval.current = setInterval(() => {
      SocketInstance?.emit(
        "getEnergy",
        localStorage.getItem("token"),
        (data: GetInfoAck) => {
          if (data.balance >= 0) {
            setScore(data.balance);
            setCount(data.energy);
          } else {
            console.log(data);
          }
        }
      );
    }, 1000);

    return () => clearInterval(interval.current);
  }, [count]);

  useEffect(() => {
    if (SocketInstance) {
      SocketInstance.emit(
        "getInfo",
        localStorage.getItem("token"),
        (data: GetInfoAck) => {
          if (data.balance >= 0) {
            setScore(data.balance);
            setCount(data.energy);
          } else {
            console.log(data);
          }
        }
      );

      SocketInstance.emit(
        "getMax",
        localStorage.getItem("token"),
        (data: GetMaxAck) => {
          setRate(data.tapRate);
          setMaxCount(data.energyLimit);

          console.log(data);
        }
      );
    } else {
      setRetry(retry + 1);
    }
  }, [retry]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "96px",
            userSelect: "none",
          }}
        >
          <Image
            style={{ cursor: "pointer" }}
            src={"/dollar.png"}
            alt={"coin"}
            width={200}
            height={200}
            onClick={(e) => {
              if (count - rate >= 0) {
                SocketInstance?.emit(
                  "click",
                  localStorage.getItem("token"),
                  (data: GetInfoAck) => {
                    if (data.balance >= 0) {
                      setCount(data.energy);
                      setScore(data.balance);
                    } else {
                      console.log(data);
                    }
                  }
                );

                // [x] get x and y position of click or touch in coin image
                const x = e.clientX;
                const y = e.clientY;

                // [x] inject a text element on that position with the value of rate
                const textElement = document.createElement("span");
                textElement.textContent = `+${rate}`;
                textElement.style.color = "white";
                textElement.style.fontSize = "24px";

                textElement.style.position = "fixed";
                textElement.style.top = `${y}px`;
                textElement.style.left = `${x}px`;

                textElement.style.pointerEvents = "none";

                document.body.append(textElement);

                // [x] animate the text element going up and fading out for 1 second
                setTimeout(() => {
                  textElement.remove();
                }, 1000);

                textElement.animate(
                  [
                    {
                      transform: "translateY(0)",
                      opacity: 1,
                    },
                    {
                      transform: "translateY(-50px)",
                      opacity: 0,
                    },
                  ],
                  {
                    duration: 1000,
                  }
                );
              }
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          marginTop: "64px",
          marginBottom: "64px",
        }}
      >
        <Image src={"/dollar.png"} alt="coin" width={24} height={24} />
        <div style={{ color: "white" }}>{score}</div>
      </div>

      <ScoreBar current={count} max={maxCount} />
    </>
  );
}
