import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { TodoContext } from "./context/TodoContext";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
    const [todos, setTodos] = useState(() => {
      const stored = localStorage.getItem("todos");
      return stored ? JSON.parse(stored) : [];
    });
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const contextValue = {
      todos : todos,
      setTodos : setTodos
    }
  return(
  <TodoContext.Provider value={contextValue}>
    <RouterProvider router={router} />;
  </TodoContext.Provider>
  )
}

export default App;
