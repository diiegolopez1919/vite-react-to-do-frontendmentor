import CrossIcon from "./icons/CrossIcon";
import CheckedIcon from "./icons/CheckedIcon";
import React from "react";

const TodoItem = React.forwardRef(({ todo, deleteTodo, updateTodo, ...props }, ref) => {

    const { id, title, completed } = todo

    return (
        <article className="flex gap-4 items-center border-b border-b-gray-200 dark:border-b-gray-700 " ref={ref} {...props}>
            <button
                className={`rounded-full  w-5 h-5 ${completed
                    ? "flex justify-center items-center bg-gradient-to-r from-cyan-500 to-fuchsia-500 "
                    : "border-2 inline-block"
                    }`}
                onClick={() => updateTodo(id)}
            >
                {
                    completed && <CheckedIcon className="" />
                }

            </button>
            <p className={`text-gray-600 grow dark:text-gray-300 ${completed && "line-through text-gray-400 dark:text-gray-700"}`}>{title}</p>
            <button className="flex-none" onClick={() => deleteTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    )
})

export default TodoItem;
