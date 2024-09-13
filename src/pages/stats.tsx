import Loading from "@/components/Kit/Loading";
import useGetStats from "@/hooks/useGetStats";

export default function Stats() {
  const { data } = useGetStats();

  if (!data) return <Loading />;

  const stats = [
    ["Total Share Balance:", data?.totalShare],
    ["Total Touches:", data?.totalTouches],
    ["Total Players:", data?.totalPlayers],
    ["Daily Users:", data?.dailyUsers],
    ["Online Players:", data?.onlinePlayers],
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
      {stats.map(([title, item], index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <div>{title}</div>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}
