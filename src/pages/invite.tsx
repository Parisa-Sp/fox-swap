type Props = {
  inviteLink: string;
  referals: number;
};

export default function invite(props: Props) {
  const { inviteLink, referals } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          marginTop: "32px",
        }}
      >
        <div>My ref:</div>
        <div>{referals}</div>
      </div>

      <div
        style={{
          backgroundColor: "#181A3E",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          marginTop: "16px",
          padding: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "white", fontWeight: "bold" }}>
            My invite link:
          </div>
          <div
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "4px 8px",
            }}
          >
            Copy
          </div>
        </div>
        <div style={{ color: "#91979E" }}>{inviteLink} gstty dfgdfg</div>
      </div>
      <div style={{ color: "white", fontWeight: "bold", marginTop: "16px" }}>
        My Referals list:
      </div>
    </div>
  );
}
