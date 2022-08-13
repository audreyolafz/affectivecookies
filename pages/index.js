import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Home() {
  function addNew(e) {
    console.log("btn clicked");
  }

  const todos = useSWR("/api/get-todo", fetcher).data;
  console.log(todos);
  return (
    <div className="dark:text-white dark:bg-black p-10">
      <h1 className="text-2xl font-bold">todo list</h1>
      <form>
        <p className="text-lg">insert new todo:</p>
        <input type="text" className="border-solid" value="" />
        {/* <input type="submit" onClick={addNew()} /> */}
      </form>
      {todos?.map((todo) => (
        <div className="flex flex-row gap-2 items-center">
          <input type="checkbox" checked={todo.completed} />
          <p className="text-md">{todo.label}</p>
        </div>
      ))}
    </div>
  );
}
