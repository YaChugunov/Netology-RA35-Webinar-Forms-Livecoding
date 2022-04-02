import React from 'react';
import './style.css';

function Feedback() {
  return (
  <form>
    <label htmlFor="name">username</label>
    <input type="text" name="name">
  </form>
  );
}

export default function App() {
  return (
    <div>
      <Feedback />
    </div>
  );
}
