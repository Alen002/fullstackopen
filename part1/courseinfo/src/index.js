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
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
];
return (
  <>
    <Header course = {course} />
    <Part part = {parts[0].name} exercises = {parts[0].exercises} />
    <Part part = {parts[1].name} exercises = {parts[1].exercises} />
    <Part part = {parts[2].name} exercises = {parts[2].exercises} />
    <Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises} />
  </>
);
};

ReactDOM.render(<App />, document.getElementById('root'));


