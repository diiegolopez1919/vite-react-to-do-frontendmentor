const TodoComputed = ({itemsLeft, clearCompleted}) => {
    return (
        <section className="py-4 px-4 rounded-b-md flex justify-between bg-white dark:bg-gray-800">
            <span className="text-gray-400">{itemsLeft} items left</span>
            <button className="text-gray-400" onClick={() => clearCompleted()}>Clear Completed</button>
        </section>
    )
}

export default TodoComputed;
