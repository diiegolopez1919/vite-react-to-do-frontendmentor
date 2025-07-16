import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div className="bg-white rounded-t-md [&>article]:p-4 mt-4 dark:bg-gray-800" ref={droppableProvider.innerRef} {...droppableProvider.droppableProps}>
                    {
                        todos.map((todo, index) =>
                        (
                            <Draggable 
                                key={todo.id} 
                                draggableId={`${todo.id}`} 
                                index={index}
                            >
                                {(draggableProvider) => (
                                    <TodoItem  
                                        todo={todo} 
                                        deleteTodo={deleteTodo} 
                                        updateTodo={updateTodo} 
                                        index={index} 
                                        ref={draggableProvider.innerRef}
                                        {...draggableProvider.dragHandleProps}
                                        {...draggableProvider.draggableProps}/>
                                )}
                            </Draggable>

                        )
                        )
                    }
                    {droppableProvider.placeholder}

                </div>
            )}
        </Droppable>
    )
}

export default TodoList;
