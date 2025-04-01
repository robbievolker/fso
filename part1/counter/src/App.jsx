import { useState } from 'react' //This is a hook (the useState hook specifically)!

const App = () => {
  const [ counter, setCounter ] = useState(0)

  //Note it is not good to define event handlers within JSX. We normally should separate them out. 
  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>
        plus
      </button>

      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App