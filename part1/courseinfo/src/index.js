import React from 'react';
import ReactDOM from 'react-dom';

/* const App = () => {
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
}; */

// Component Header
const Header = (props) => (
  <h1>{props.course}</h1>
);

// Component Content
const Content = (props) => {
  return (
  <>
    <p>{props.part} {props.exercises}</p>
  </>
  );
};

// Component Total
const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
);

// Root Component App
const App = () => {
const course = 'Half Stack Application Development';
const part1 = 'Fundamentals of React';
const part2 = 'Using props to pass data';
const part3 = 'State of a component';
const exercises1 = 10;
const exercises2 = 7;
const exercises3 = 14;

return (
  <>
    <Header course = {course} />
    <Content part = {part1} exercises = {exercises1} />
    <Content part = {part2} exercises = {exercises2} />
    <Content part = {part3} exercises = {exercises3} />
    <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
  </>
);
};

ReactDOM.render(<App />, document.getElementById('root'));


