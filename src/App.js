import React from 'react';
import './style.css';

function Feedback() {
  const [name, setName] = useState('');

  const formHandler = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    console.dir(e.target);
  };

  const inputHandler = (e) => {
    e.preventDefault(); // При нажатии ничего не происходит
    console.dir(e.target);
  };

  return (
    <>
      <pre>{JSON.stringify(name)}</pre>
      <form onSubmit={formHandler}>
        <label htmlFor="name">username</label>
        <input type="text" name="name" id="name" onChange={inputHandler} />
        <button>Send</button>
      </form>
    </>
  );
}

export default function App() {
  return <Feedback />;
}
