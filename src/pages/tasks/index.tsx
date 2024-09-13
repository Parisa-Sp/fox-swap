import Loading from "@/components/Kit/Loading";
import Task from "@/components/Task/Task";
import useGetTasks from "@/hooks/useGetTasks";

export default function Tasks() {
  const { data } = useGetTasks();

  if (!data) return <Loading />;

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
        {Object.keys(data).map((key) => (
          <Task
            key={key}
            title={data[key].title}
            count={data[key].reward}
            route={data[key].id}
          />
        ))}
      </div>
    </>
  );
}
