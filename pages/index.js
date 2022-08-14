import React from "react";
import { useForm } from "react-hook-form";
import { get as fetch } from "axios";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    fetch("/api/create?item=" + data.item + `&` + "people=" + data.people).then(
      (r) => console.log(r.data)
    );
  };
  const todos = useSWR("/api/get", fetcher).data;
  return (
    <div className="dark:text-white dark:bg-black p-10 font-sans">
      <h1 className="text-2xl font-bold">todo list</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-52 mb-5 p-8 rounded-lg space-y-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            todo
          </label>

          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="i need to code"
            required=""
            {...register("item", { required: true })}
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            People u do it with
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="my favorite humaaans"
            required=""
            {...register("people", { required: true })}
          />
        </div>
        <button
          type="submit"
          value="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-52 mb-5 p-8 rounded-lg space-y-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
          todo:
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="ml-2 mr-1 w-8 h-8"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" />
              <path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
            </svg>
          </span>
          <input
            type="text"
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="i need to code.."
            {...register("item", { required: true })}
          />
          <br />
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="ml-2 mr-1 w-8 h-8"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z" />
              <path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z" />
            </svg>
          </span>
          <input
            type="text"
            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="my favorite humaaans"
            {...register("people", { required: true })}
          />
          <br />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="submit"
            >
            Submit
          </button>
        </div>
            </form> */}

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-5 bg-yellow-600 mx-52 p-8 rounded-lg"
      >
        <label htmlFor="todo" className="text-lg text-center">
          insert new todo:
        </label>
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
          className="bg-blue-500 text-white py-2 hover:bg-blue-600 rounded-xl font-bold mx-96 cursor-pointer"
          value="Submit"
        />
      </form> */}

      <div className="grid grid-cols-5 auto-cols-max">
        {todos?.map((todo) => (
          <div className=" m-5 p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.item}
            </p>
            <p key={todo.id} className="text-gray-700 text-base text-center">
              {todo.people}
            </p>
          </div>
        ))}
      </div>

      {/* {todos?.map((todo) => (
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <h5
            key={todo.id}
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {todo.item}
          </h5>
          <p
            key={todo.id}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            {todo.people}
          </p>
        </div>
      ))} */}
    </div>
  );
}
