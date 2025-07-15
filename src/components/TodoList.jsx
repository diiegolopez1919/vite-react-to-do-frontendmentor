import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-4 dark:bg-gray-800">
            {
                todos.map((todo) =>
                    (<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
                )
            }

        </div>
    )
}

export default TodoList;
