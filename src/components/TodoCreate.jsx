import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

  const [title, setTitle] = useState("")

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("")
    }
    createTodo(title.trim())
    setTitle("")


  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8 dark:bg-gray-800">
      <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
      <input
        className="w-full text-gray-400 outline-none dark:bg-gray-800"
        type="text"
        placeholder="Create a new todo..."
        name="title"
        value={title}
        onChange={onChangeTitle}
      />
    </form>

  )
}

export default TodoCreate;