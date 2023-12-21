// component import
import ListButtons from "./ListButtons";

const CompletedTodoList = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  const result = Object.groupBy(todos, ({ completed }) => completed);

  if (result.true) {
    return (
      <>
        <details open>
          <summary role="button" className="secondary">
            <span className="summary_heading">Completed todos</span>
          </summary>
          <ul>
            {result.true?.map((todo) => (
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

export default CompletedTodoList;
