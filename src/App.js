import React, { useState } from 'react';
import './style.css';

function Feedback() {
  const [state, setState] = useState({
    name: '',
    checkbox: false,
  });
  const [checkbox, setCheckbox] = useState(false);

  const formHandler = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    console.dir(name);
  };

  const inputHandler = (e) => {
    // e.preventDefault(); // При нажатии ничего не происходит
    const inputName = e.target.name;
    const type = e.target.type;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setState({ [inputName]: value });
    console.log(inputName, type);
    console.dir(e.target.checked);
  };

  return (
    <>
      <pre>{JSON.stringify(state, null, ' ')}</pre>
      <form onSubmit={formHandler}>
        <label htmlFor="name">username</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={inputHandler}
          value={state.name}
        />
        <input name="checkbox" type="checkbox" onChange={inputHandler} />
        <button>Send</button>
      </form>
    </>
  );
}

export default function App() {
  return <Feedback />;
}
