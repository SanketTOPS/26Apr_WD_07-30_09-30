import { useState } from "react";

function Userform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const btnSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError("All fields are required");
    } else {
      setError("");
      alert("Form submitted successfully");
        // Clear the form fields
        setName("");
        setEmail("");
        setPassword("");
    }
  };
  return (
    <div>
      <form onSubmit={btnSubmit}>
        <h1>Registration Form</h1>
        <hr />
        {error} <br /> <br />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br /> <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Userform;
