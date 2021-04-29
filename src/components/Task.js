import React, { useEffect, useState } from 'react';

const Task=({ task, index, completed, removeTask}) => {

    
    const [complete, setComplete] = useState(false);
    const [time, setTime] = useState("");

    useEffect(()=>{
        if(task.completed) {
            setComplete(true);
        }
    },[completed]);

    useEffect(()=>{
        const currTime = new Date().toLocaleTimeString();
        console.log(currTime);
        setTime(currTime);
    },[]);



  return (
        <div>
            <div className="task"
            style={{textDecoration: complete ? "line-through" : ""}}>
            {task.title}
            <button onClick={()=> completed(index)}>Complete</button>
            <button style={{backgroundColor: "red"}} onClick={() => removeTask(index)}>X</button>
            </div>
            <div><span>Created At {time}</span></div>
           
        </div>
            
    );

}

export default Task;