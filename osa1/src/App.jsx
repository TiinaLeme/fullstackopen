const Header = (props) => {
  return (
    <>
      <h1>{props.header}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part}, {props.exercise}
      </p>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercise={part.exercises} />
      ))}
    </>
  );
}

const Total = ({ total }) => {
  const totalExercises = total.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  

  return (
    <div>
      <Header header={course}/>
      <Content parts={parts}/>
      <Total total={parts}/>

    </div>
  )
}

export default App