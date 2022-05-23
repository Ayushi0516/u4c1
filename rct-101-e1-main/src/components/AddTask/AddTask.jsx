import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const[query,setQuery]=React.useState("");
  const[list, setList]=React.useState([]);
  const handleAdd= ()=>{
     const payload={
       title:query,
       status:false,

     }
     setList([...list,payload])
  };
  return (
    <>
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={query} onChange={(e)=> setQuery(e.target.value)} type="text" placeholder="AddTask..." />
      <button data-cy="add-task-button"  onClick={handleAdd}>+</button>
    </div>
    <div>
      {list.map((item)=>(
       <div>{item.title}</div>
      ))}
       
      
    </div>
    </>
  );
};

export default AddTask;
