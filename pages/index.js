import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    fetch("/api/create?todo=" + data.item + "people=" + data.people); //.then((r) => alert(r.data));
  };
  const todos = useSWR("/api/get", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black p-10">
      <h1 className="text-2xl font-bold">todo list</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 bg-yellow-600 mx-52 p-8 rounded-lg"
      >
        <label className="text-lg text-center">insert new todo:</label>
        <input
          type="text"
          className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600 mx-96 rounded-sm"
          id="newTodo"
          placeholder="i need to code.."
          {...register("item", { required: true })}
        />
        <input
          type="text"
          className="bg-gray-200 border-b-2 border-gray-400 focus-within:outline-none focus-within:border-gray-600 mx-96 rounded-sm"
          id="newPeople"
          placeholder="my favorite humaaans"
          {...register("people", { required: true })}
        />
        <input
          type="submit"
          className="bg-blue-500 text-white py-2 hover:bg-blue-600 rounded-xl font-bold mx-96"
          value="Submit"
        />
      </form>
      {todos?.map((todo) => (
        <div className="grid grid-flow-col grid-flow-col-dense grid-flow-col-dense">
          <div className=" m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.item}
            </p>
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.people}
            </p>
          </div>
        </div>
        // <div className="flex flex-row gap-2 items-center">
        //   {/* <input type="checkbox" checked={todo.completed} /> */}
        //   <p key={todo.id} className="text-md">
        //     {todo.item}
        //   </p>
        // </div>
      ))}
    </div>
  );
}
