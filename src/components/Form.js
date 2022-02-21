import React, { useEffect, useState } from "react";

export const Form = () => {
  const [username, setUsername] = useState();
  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/api/type/post-type", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: username }),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
  };
  const handleChange = ({ target }) => {
    setUsername(target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
