import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;

  const[count,setCounter]=React.useState(0)
  const handle =(value)=>
  {
    setCounter(count+value)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>handle(1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
