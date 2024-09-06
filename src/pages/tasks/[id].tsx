import TaskContent from "@/components/Task/TaskContent";

export default function Page() {
  return (
    <>
      <TaskContent
        description="We regulary share valuable content on our socials. Join us there and get the rewards"
        title="Join Our socials"
        isCompleted
        price={3000000}
      />
    </>
  );
}

Page.noLayout = true;
