type Props = {
  name: string;
};
export default function TaskDetail(props: Props) {
  const { name } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",

        borderRadius: "8px",
        backgroundColor: "#17223E",
        padding: " 12px 16px",
        gap: "12px",
        color: "white",
      }}
    >
      {name}
    </div>
  );
}
