import React, { useEffect, useState } from 'react';
import './Todo.css';
import Task from './Task';
   

    const CreateTask = ({addTask}) =>{
        const [value, setvalue] = useState("");

        const handleSubmit = e => {
            e.preventDefault();
            if (!value) 
            return null;
           addTask(value);
           setvalue("");
        }

        return (
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   className="input"
                   value={value}
                   placeholder="Add new task"
                   onChange={e => setvalue(e.target.value)}

                />
            </form>
        )
    }
    const  Todo=()=> {

        const [tasks, setTasks] = useState([
            {
                title: "Eating Burger",
                completed: false,
                time: ""

            }      
        ]);

        const [leftasks, setLeftTasks] = useState(0);

        useEffect(()=>{

            setLeftTasks(tasks.filter(task => !task.completed).length);
        })

        const addTask = (title) => {
            const newTasks= [...tasks, {title, completed:false}];
            setTasks(newTasks);
        };


         const completeTask = (index) =>{
           const newTasks = [...tasks];
           newTasks[index].completed = true;
           setTasks(newTasks);
           
        }

        const removeTask = (index) =>{
            window.alert("are You sure you want to remove");
            const newTasks = [...tasks];
                newTasks.splice(index, 1);
                setTasks(newTasks);
        }
      

        return (
            <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
                <div className="tasks">
                    {tasks.map((task, index, time) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                            completed={completeTask}
                            removeTask={removeTask}  
                            time= {time}           
                        />
                        
                    ))}
                </div>
                <div style={{alignContent:"center", marginLeft:"140px"}}>
                    <CreateTask addTask={addTask}/>                
                </div>
                <div>
                    <h1>Pending Task: {leftasks}</h1>
                </div>
            </div>
        );
    }

    export default Todo;