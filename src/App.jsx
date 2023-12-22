// React imports
import { useState, useEffect } from "react";

// Library imports
import "@picocss/pico";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component imports
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

// Helper functions imports
import { fetchTodos, saveTodos } from "./helperFns";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingMode, setEditingMode] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [newUser, setNewUser] = useState(null);
  const [isNewUser, setIsNewUser] = useState(false);

  // Get the list of existing todos
  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("userName"));
    console.log("1 userName: ", userName);
    setNewUser(userName);
    const storedTodos = fetchTodos("todos") || [];
    setTodos(storedTodos);
  }, [isNewUser]);

  // useEffect(() => {
  //   const userName = JSON.parse(localStorage.getItem("userName"));
  //   console.log("2 userName: ", userName);
  //   setNewUser(userName);
  // }, [isNewUser]);

  // Check if new user exists or not
  const toggleIsNewUser = () => {
    setIsNewUser(true);
  };

  // Function to add todos to the list
  const addTodo = (todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    toast.info("New todo added.");
  };

  // function to toggle completed status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  // Function to remove todos from the list
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    toast.info("Todo is deleted.");
  };

  // Function to edit todos
  const editTodo = (id, text) => {
    setEditingTodo({ id: id, text: text });
    setEditingMode(true);
  };

  // Function to toggle editing mode
  const toggleEditingMode = () => setEditingMode((prev) => !prev);

  // Function to updete todos
  const updateTodo = (id, updatedText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setEditingTodo(null);
    setEditingMode(false);
    toast.info("Todo is updated.");
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  };

  return (
    <main>
      <div className="container">
        {/* Navbar */}
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        {newUser ? (
          <div>
            <h1 className="welcome_heading">
              Welcome back, <span className="accent">{newUser}</span>
            </h1>
            {/* Todo form */}
            <TodoForm
              addTodo={addTodo}
              updateTodo={updateTodo}
              editingTodo={editingTodo}
              editingMode={editingMode}
              toggleEditingMode={toggleEditingMode}
            />

            {/* Currrent todos */}
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />

            {/* Completed todos */}
            <CompletedTodoList
              todos={todos}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        ) : (
          <Intro toggleIsNewUser={toggleIsNewUser}/>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
};

export default App;
