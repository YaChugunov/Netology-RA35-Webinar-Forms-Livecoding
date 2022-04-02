import React, { useState } from 'react';
import './style.css';

class FeedbackClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      checkbox: false,
    };
  }

  changeName(e) {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state, null, ' ')}</pre>
        <input
          type="text"
          onChange={(e) => {
            this.changeName(e);
          }}
        />
      </>
    );
  }
}

function Feedback() {
  const [form, setForm] = useState({
    name: '',
    checkbox: true,
    select: null,
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

    setForm((prevState) => ({ ...prevState, [inputName]: value }));
    console.log(inputName, type);
    console.dir(e.target.checked);
  };

  return (
    <>
      <pre>{JSON.stringify(form, null, ' ')}</pre>
      <form onSubmit={formHandler}>
        <label htmlFor="name">username</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={inputHandler}
          value={form.name}
        />
        <input
          name="checkbox"
          type="checkbox"
          checked={form.checkbox}
          onChange={inputHandler}
        />
        <select name="select" id="select" onChange={inputHandler}>
          <option value="id1">Item1</option>
          <option value="id2">Item2</option>
        </select>
        <button>Send</button>
      </form>
    </>
  );
}

export default function App() {
  return (
    // <Feedback />
    <FeedbackClass />
  );
}
