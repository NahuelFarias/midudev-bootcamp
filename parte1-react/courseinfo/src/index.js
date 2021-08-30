import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  const { course } = props; // Desestructuracion
  // const couse = props.course - Son equivalentes
  return <h1>{course}</h1>;
};

// const Title = ({course}) => <h1>{course}</h1>

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.text} {props.ex1 + props.ex2 + props.ex3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const text = "Number of exercises ";

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Total text={text} ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
