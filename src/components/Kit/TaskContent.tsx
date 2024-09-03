import { title } from "process";

type Props = {
  title: string;
  description: string;
  price: number;
  isCompleted: boolean;
  name: string;
};

export default function TaskContent(props: Props) {
  const { description, isCompleted, name, price, title } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontWeight: "bold" }}>{title}</div>
      <div>{description}</div>

      <div></div>
    </div>
  );
}
