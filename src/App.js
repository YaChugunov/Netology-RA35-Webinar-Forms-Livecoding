import React, { useState, useRef } from 'react';
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

function FileUploader() {
  const [state, setState] = useState({
    file: null,
  });
  const onChange = (e) => {
    console.dir(e.target.files);
    setState((pv) => ({ ...pv, file: e.target.files[0] }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const fr = new FileReader();
    fr.addEventListener('load', (e) => {
      console.dir(e.target.result);
    });
    fr.readAsDataURL(state.file);

    // const data = new FormData();
    // [...state.file].forEach((file) => {
    // data.append('file', file);
    // });
    // console.dir(data);
  };

  return (
    <>
      <pre>{JSON.stringify(state)}</pre>
      <form action="" onSubmit={onSubmit}>
        <input type="file" onChange={onChange} />
        <button>Send</button>
      </form>
    </>
  );
}

function InputRef() {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.files);
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <input ref={inputRef} type="file" />
      <button>Send</button>
    </form>
  );
}
export default function App() {
  return (
    // <Feedback />
    // <FeedbackClass />
    // <FileUploader />
    <InputRef />
  );
}
