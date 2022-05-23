import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 6;
  let unCompletedTask = 4;

  const [counter,setCounter]=React.useState(0)

  const handleCounter =(value)=>
  {
    setCounter(counter+value)
  }

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h2>TodoList</h2>
      <b data-cy="header-remaining-task" onClick={()=> handleCounter(1)}>you have {unCompletedTask}</b>
      <b data-cy="header-total-task">of {totalTask} remaining</b>
    </div>
  );
};

export default TaskHeader;
