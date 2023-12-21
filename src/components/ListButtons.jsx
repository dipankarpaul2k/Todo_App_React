// Icon imports
import {
  TrashIcon,
  CheckCircleIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

export default function ListButtons({
  todo,
  editTodo,
  toggleTodo,
  deleteTodo,
}) {
  const iconWidth = 20;
  return (
    <div className="list_btns">
      {/* edit button */}
      <button
        onClick={() => editTodo(todo.id, todo.text)}
        disabled={todo.completed}
        data-tooltip="Edit"
        style={{
          display: todo.completed ? "none" : "flex",
        }}
      >
        <span>Edit</span>
        <PencilSquareIcon width={iconWidth} />
      </button>

      {/* Completed toggle button */}
      <button
        onClick={() => toggleTodo(todo.id)}
        data-tooltip={todo.completed ? "Mark incomplete" : "Mark complete"}
      >
        {todo.completed ? (
          <>
            <span>Pending</span>
            <ArrowUturnLeftIcon width={iconWidth} />
          </>
        ) : (
          <>
            <span>Completed</span>
            <CheckCircleIcon width={iconWidth} />
          </>
        )}
      </button>

      {/* delete button */}
      <button onClick={() => deleteTodo(todo.id)} data-tooltip="Delete">
        <span>Delete</span>
        <TrashIcon width={iconWidth} />
      </button>
    </div>
  );
}
