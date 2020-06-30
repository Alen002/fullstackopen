import React from 'react';
import ReactDOM from 'react-dom';

// Header Component
const Header = (props) => (
  <h1>{props.course}</h1>
);

/* // Content Component
const Content = () => {
  return (
  <>
    <Part part = {part1} exercises = {part1.exercises} />
    <Part part = {part2} exercises = {part2.exercises} />
    <Part part = {part3} exercises = {part3.exercises} />
  </>
  );
}; */

// Part Component
const Part = (props) => (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  );


// Total Component
const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
);

// Root Component App
const App = () => {
const course = 'Half Stack application development';
const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
};
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
};
const part3 = {
  name: 'State of a component',
  exercises: 14
};

return (
  <>
    <Header course = {course} />
    <Part part = {part1.name} exercises = {part1.exercises} />
    <Part part = {part2.name} exercises = {part2.exercises} />
    <Part part = {part3.name} exercises = {part3.exercises} />
    <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
  </>
);
};

ReactDOM.render(<App />, document.getElementById('root'));


