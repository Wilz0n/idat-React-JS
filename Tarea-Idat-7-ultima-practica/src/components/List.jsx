export const TaskList = ({ tasks, deleteTask }) => {
    return (
      <section>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.name} - {task.author}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
    