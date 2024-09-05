import Task from "@/components/Kit/Task";

export default function Tasks() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#17223E",
          borderRadius: "8px",
          marginTop: "32px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            padding: "8px 16px",
            margin: "4px",
          }}
        >
          Tasks
        </div>
      </div>

      <div>
        <Task title="Join Our Socials" count={2000000} route="24" />
        <Task title="Join Our Youtube" count={6000000} route="13" />
        <Task title="Join Token Youtube Channel" count={1000000} route="15" />
      </div>
    </>
  );
}
