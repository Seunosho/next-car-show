"use client"

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("Seun");
  const [age, setAge] = useState(4);

  const handleAgeIncrement = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAgeIncrement}>Increase age</button>
      <p>Hello, {name}. You are {age}.</p>
    </div>
  );
};

export default Form;
