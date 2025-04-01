const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Rob" age = {16} />
      <Hello name="Zoey"/>
      <Hello />

    </div>
  )
}

export default App