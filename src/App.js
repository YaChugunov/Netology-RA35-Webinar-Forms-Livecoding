import React, { useState } from 'react';
import './style.css';

function Feedback() {
  const [name, setName] = useState('John Doe');
  const [checkbox, setCheckbox] = useState(false);

  const formHandler = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    console.dir(name);
  };

  const inputHandler = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    setName(e.target.value);
    console.dir(e.target.value);
  };

  const checkboxHandler = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    setCheckbox(e.target.checked);
    console.dir(e.target.checked);
  };

  return (
    <>
      <pre>{JSON.stringify({ name, checkbox }, null, ' ')}</pre>
      <form onSubmit={formHandler}>
        <label htmlFor="name">username</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={inputHandler}
          value={name}
        />
        <input type="checkbox" onChange={checkboxHandler} />
        <button>Send</button>
      </form>
    </>
  );
}

export default function App() {
  return <Feedback />;
}
