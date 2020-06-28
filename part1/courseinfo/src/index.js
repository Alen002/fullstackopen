import React from 'react';
import ReactDOM from 'react-dom';


// Header Component
const Header = (props) => (
  <h1>{props.course}</h1>
);

// Content Component
const Content = () => {
const part1 = 'Fundamentals of React';
const part2 = 'Using props to pass data';
const part3 = 'State of a component';
const exercises1 = 10;
const exercises2 = 7;
const exercises3 = 14; 

  return (
  <>
    <Part part = {part1} exercises = {exercises1} />
    <Part part = {part2} exercises = {exercises2} />
    <Part part = {part3} exercises = {exercises3} />
  </>
  );
};

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
const course = 'Half Stack Application Development';
const exercises1 = 10;
const exercises2 = 7;
const exercises3 = 14; 
return (
  <>
    <Header course = {course} />
    <Content />
    <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
  </>
);
};

ReactDOM.render(<App />, document.getElementById('root'));


