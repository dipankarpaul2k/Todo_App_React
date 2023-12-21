import { useEffect, useRef, useState } from "react";

const TodoForm = ({
  addTodo,
  updateTodo,
  editingTodo,
  editingMode,
  toggleEditingMode,
}) => {
  const todoTextRef = useRef();
  const [text, setText] = useState("");

  useEffect(() => {
    todoTextRef.current.focus();
    if (editingMode) {
      setText(editingTodo.text);
    } else {
      setText("");
    }
  }, [editingTodo, editingMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editingMode) {
      if (text.trim() !== "") {
        addTodo({
          id: crypto.randomUUID(),
          text: text,
          completed: false,
        });
      }
      setText("");
      todoTextRef.current.focus();
    } else {
      updateTodo(editingTodo.id, text);
      setText("");
      todoTextRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo..."
          ref={todoTextRef}
        />
        <div className="form_btns">
          <button type="submit">{editingMode ? "Update" : "Add"}</button>
          {editingMode && (
            <button type="submit" onClick={toggleEditingMode}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
