import TasksForm from "./components/TasksForm";
import TableTasks from "./components/TableTask";
function App() {
  return (
    <div className="w-screen flex justify-center items-center flex-col">
      <TasksForm />
      <TableTasks />
    </div>
  );
}

export default App;
