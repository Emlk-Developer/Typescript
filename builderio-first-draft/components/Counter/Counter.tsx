"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
  initialCount?: number;
  title: string
}


function Counter({ initialCount = 99,  title }: Props) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <section className="flex gap-5">

    <div className={`${styles.counter}, border-2 border-black p-5` }>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>

    </section>
  );
}

export default Counter;
