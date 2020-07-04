import React from 'react';
import ReactDOM from 'react-dom';

// Header Component
const Header = (props) => (
  <h1>{props.course}</h1>
);

// Part Component
const Part = (props) => (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  );


// Total
const Total = (props) => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
);

// Root Component App
const App = () => {
const course = {
  name: 'Half Stack application development',
  parts: [
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
  ]
};
return (
  <>
    <Header course = {course.name} />
    <Part part = {course.parts[0].name} exercises = {course.parts[0].exercises} />
    <Part part = {course.parts[1].name} exercises = {course.parts[1].exercises} />
    <Part part = {course.parts[2].name} exercises = {course.parts[2].exercises} />
    <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises} />
  </>
);
};

ReactDOM.render(<App />, document.getElementById('root'));


