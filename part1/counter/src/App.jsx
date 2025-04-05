import { useState } from 'react' //This is a hook (the useState hook specifically)!

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log("Rendering with counter value", counter)

  //Note it is not good to define event handlers within JSX. We normally should separate them out. 
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text = "plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}

const Display = ({ counter }) => {
  return (
    <div>
      {counter}
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
      <button onClick={onClick}>
        {text}
      </button>
  )
}
export default App