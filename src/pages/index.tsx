import ScoreBar from "@/components/Home/ScoreBar";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const maxCount = 6000;
const rate = 10;
const rechargingSpeed = 10;

export default function Home() {
  const [count, setCount] = useState(maxCount);

  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (interval.current) clearInterval(interval.current);

    interval.current = setInterval(() => {
      if (count + rechargingSpeed <= maxCount) {
        setCount((prevCount) => prevCount + rechargingSpeed);
      }
    }, 1000);

    return () => clearInterval(interval.current);
  }, [count]);

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
                setCount((prevCount) => prevCount - rate);

                const score = localStorage.getItem("score");
                if (score) {
                  localStorage.setItem(
                    "score",
                    (Number(score) + rate).toString()
                  );
                } else {
                  localStorage.setItem("score", rate.toString());
                }

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
        <div style={{ color: "white" }}>
          {typeof window === "undefined"
            ? 0
            : localStorage.getItem("score") || 0}
        </div>
      </div>

      <ScoreBar current={count} max={maxCount} />
    </>
  );
}
