import Image from "next/image";

type Props = {
  TotalShare: number;
  TotalTouches: number;
  TotalPlayers: number;
  DailyUsers: number;
  OnlinePalyers: number;
};

export default function Stats({
  TotalShare,
  TotalTouches,
  TotalPlayers,
  DailyUsers,
  OnlinePalyers,
}: Props) {
  const stats = [
    ["Total Share Balance:", TotalShare],
    ["Total Touches:", TotalTouches],
    ["Total Players:", TotalPlayers],
    ["Daily Users:", DailyUsers],
    ["Online Players:", OnlinePalyers],
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        marginTop: "32px",
        color: "white",
      }}
    >
      {stats.map(([index, item]) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <div>{index}</div>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}
