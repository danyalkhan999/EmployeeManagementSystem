import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  console.log("employee data : ", data);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header data={data} />
      <TaskListNumber counts={data.taskCount} />
      <TaskList tasks={data.tasks} />
    </div>
  );
};

export default EmployeeDashboard;
