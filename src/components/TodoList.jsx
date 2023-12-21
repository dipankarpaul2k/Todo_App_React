// Component import
import ListButtons from "./ListButtons";

const TodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  const result = Object.groupBy(todos, ({ completed }) => completed);

  if (todos.length === 0) {
    return (
      <div className="headings" style={{ textAlign: "center" }}>
        <h2>Welcome back</h2>
        <p>Add some task in your todo list.</p>
      </div>
    );
  } else {
    return (
      <>
        <details open>
          <summary role="button">
            <span className="summary_heading">Current todos</span>
          </summary>
          <ul>
            {result.false?.map((todo) => (
              <li key={todo.id} className="todo_list_item">
                <details>
                  <summary role="button" className="secondary outline">
                    {todo.text}
                  </summary>
                  <div className="todo_content">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quaerat assumenda voluptates necessitatibus earum beatae
                      fugit laboriosam vitae quidem a rerum dicta, rem esse vero
                      corporis placeat delectus nam facere repudiandae?
                    </p>

                    <ListButtons
                      todo={todo}
                      toggleTodo={toggleTodo}
                      editTodo={editTodo}
                      deleteTodo={deleteTodo}
                    />
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </details>
      </>
    );
  }
};

export default TodoList;
