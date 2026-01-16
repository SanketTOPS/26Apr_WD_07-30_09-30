import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>

      <Child count={count} setCount={setCount}></Child>
    </div>
  );
}
export default Parent;
