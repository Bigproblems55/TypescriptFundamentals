import React, {useState} from 'react';
const Task: React.FC = () =>{
    const [task, setTask ] = useState<string>('');
    const [taskList, setTaskList] = useState<string[]>([]);

    return (
        <div className="tasks">
            <h2>Render a task</h2>
            <input type="text" placeholder="Enter your task" 
            value={task} onChange={(e) => 
            setTask(e.target.value)} />
            <button className="taskbtn" onClick={() =>{
                if(task){
                    setTaskList([...taskList, task]);
                    setTask('');
                }
            }}>Add Task</button>
            <div className="task-list">
                <h3>Your Tasks:</h3>
                <ol>
                    {taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ol>
            </div>
        </div>
    );

};

export default Task;