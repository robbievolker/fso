import { useState } from 'react'

const App = () => {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)
  
  const total = countGood + countNeutral + countBad
  const average = (((countGood * 1) + (countBad * -1)) / total).toFixed(2)
  const positive = ((countGood / total) * 100).toFixed(2)


  const handleSetGood = () => {
    setCountGood(previousGood => previousGood + 1 )
  }

  const handleSetNeutral = () => {
    setCountNeutral(previousNeutral => previousNeutral + 1 )
  }

  const handleSetBad = () => {
    setCountBad(previousBad => previousBad + 1 )
  }

  return (
    <div>
      <Title text={"give feedback"}/>
      <Button text={"Good"} onClick={handleSetGood}/>
      <Button text={"Neutral"} onClick={handleSetNeutral}/>
      <Button text={"Bad"} onClick={handleSetBad}/>
      <br/>
      <Title text={"statistics"}/>
      <Statistics good={countGood} bad={countBad} neutral={countNeutral} total={total} average={average} positive={positive}/>
    </div>
  )
}

const Title = ({text}) => {
  return (
    <>
      <h1>{ text }</h1> 
    </>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total > 0) {
    return (
      <>
      <table>
        <tr><Stats text={"good"} number={good}/></tr>
        <tr><Stats text={"neutral"} number={neutral}/></tr>
        <tr><Stats text={"bad"} number={bad} /></tr>
        <tr><Stats text={"all"} number={total}/></tr>
        <tr><Stats text={"average"} number={average}/></tr>
        <tr><Stats text={"positive"} number={positive + " %"}/></tr>
      </table>
      </>
    )
  }
  return (
    <p>No feedback has been given yet!</p>
  )
}

const Stats = ({text, number}) => {
  return (
    <>
    <td>{text}</td> <td>{number}</td>
    </>
  )
}

export default App
