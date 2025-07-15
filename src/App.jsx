import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
  {
    id: 1,
    title: "Complete online Javascript bluuweb course",
    completed: true
  },
  {
    id: 2,
    title: "Go to the gym",
    completed: false
  },
  {
    id: 3,
    title: "10 minutes meditation",
    completed: false
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: false
  },
  {
    id: 5,
    title: "Complete todo app frontend mentor",
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all");

  const filterTodos = todos.filter(todo => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed
    } else if (filter === "completed") {
      return todo.completed
    }
  })

  const createTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    const todosFiltered = todos.filter(todo => todo.id != id)
    setTodos(todosFiltered)
  }

  const updateTodo = (id) => {
    todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed
        return todo
      }
    })
    setTodos([...todos])
  }

  const computedItemsLeft = todos.filter(todo => !todo.completed).length

  const clearCompleted = () => {
    setTodos(todos.map(todo => todo.completed ? { ...todo, completed: false } : todo))
  }



  return (
    <div className="bg-gray-200 dark:bg-gray-900 bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-no-repeat bg-contain min-h-screen dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">
      <Header />

      <main className="container mx-auto px-4">
        <TodoCreate createTodo={createTodo} />
        <TodoList todos={filterTodos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        <TodoComputed itemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
        <TodoFilter setFilter={setFilter} filter={filter}/>
      </main>

      <footer className="text-center mt-8 dark:text-gray-400">
        Drag and drop to reorder list
      </footer>

    </div>
  )
}

export default App;