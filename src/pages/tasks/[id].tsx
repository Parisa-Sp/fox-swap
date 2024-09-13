import Loading from "@/components/Kit/Loading";
import TaskContent from "@/components/Task/TaskContent";
import useGetTasks from "@/hooks/useGetTasks";
import { useRouter } from "next/router";

export default function Page() {
  const { query, replace } = useRouter();

  const { data, update } = useGetTasks();

  if (!data) return <Loading />;

  const item = data[query.id as string];

  if (!item) replace("/404");

  return (
    <>
      <TaskContent
        update={update}
        subTasks={item.subTasks}
        description={item.description}
        title={item.title}
        isCompleted={item.isDone}
        price={item.reward}
      />
    </>
  );
}

Page.noLayout = true;
