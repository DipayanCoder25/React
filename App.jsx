import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.age) {
      setFormData("All fields r fulled");
      return;
    }
    if (
      formData.email === "dip@gmail.com" &&
      formData.password === "admin" &&
      formData.age === "25"
    ) {
      setMessage("Login Succesful");
    } else {
      setMessage("Invalid email or passoword");
    }
  };

  return (
    <div className="container">
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="age"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
