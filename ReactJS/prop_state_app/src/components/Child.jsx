function Child({ count, setCount }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default Child;
