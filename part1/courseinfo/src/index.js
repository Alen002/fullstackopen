import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack Application Development';
  const part1 = 'Fundamentals of React';

  const exercises1 = 10;
  const part2 = 'Using props to pass data';

  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


