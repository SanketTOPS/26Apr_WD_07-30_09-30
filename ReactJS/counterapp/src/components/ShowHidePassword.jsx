import { useState } from "react";
function ShowHidePassword() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Password Show & Hide</h1>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password!"
      />{" "}
      <br /> <br />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default ShowHidePassword;
