import { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem";

function TaskList({ tasks, removeTask, editTask, doneTask }) {
  const [priority, setPriority] = useState(false)
  const [filteredTasks, setFilteredTasks] = useState(tasks)


  function handlePriorityFilter(){

    setPriority(prev => !prev)
  }
  useEffect(()=> {
    setFilteredTasks(tasks)
  }, [tasks])

  useEffect(()=> {
    priority ? setFilteredTasks(tasks.filter(item => item.priority === priority)) : setFilteredTasks(tasks)
  }, [priority])

  if (tasks.length === 0) {
    return <></>
  }
  return (
    <>
      
      <div className="p-3 rounded bg-light border mt-3">
        <h4 className="mt-3">List: <span onClick={handlePriorityFilter}
        className="btn btn-info float-end btn-sm mb-2">
          {!priority ? "Oncelikli Olanlari Goster" : "Hepsini Goster"}
          </span></h4>
        <ul className="list-group mt-3">
          {filteredTasks.map((task) =>
            <TaskListItem key={task.uuid} task={task} removeTask={removeTask} editTask={editTask} doneTask={doneTask}/>
          )}
        </ul>
      </div>
    </>
  )
}
export default TaskList;