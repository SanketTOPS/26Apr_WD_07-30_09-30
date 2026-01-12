import { useState } from "react";

function New() {
  //let count = 0;
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>New Component</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default New;
