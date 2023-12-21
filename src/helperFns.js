// Fetch from the local storage
export const fetchTodos = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Save to the local storage
export const saveTodos = (value) => {
  // Key is "todos", Cuz we are only dealing with the todos here
  return localStorage.setItem("todos", JSON.stringify(value));
};
