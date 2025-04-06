import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState({anecdote: anecdotes[0], votes: 0})

  const nextAnecdote = () => {
    const randInt = Math.floor(Math.random() * anecdotes.length);
    setSelected(randInt)
  }

  const voteAnecdote = () => {
    setVotes(prevVotes => {
      const newVotes =  [...prevVotes];
      newVotes[selected] = (newVotes[selected] || 0) + 1;
      updateMostVoted(newVotes)
      return newVotes;
    });
    console.log(votes)
  }

  const updateMostVoted = (newVotes) => {
    let maxVotes = mostVoted.votes
    let index = -1

    for(let i = 0; i < newVotes.length; i++) {
      if (newVotes[i] > maxVotes) {
        maxVotes = newVotes[i]
        index = i
      }
    }

    if (index != -1) {
      setMostVoted({anecdote: anecdotes[index], votes : maxVotes})
    }

  }


  return (
    <div>
      <Title text={"Anecdote of the day"}/>
      {anecdotes[selected]}
      <br/>
      has {votes[selected] || 0} votes
      <br/>
      <Button onClick = {voteAnecdote} text={"vote"}/>
      <Button onClick={nextAnecdote} text={"next anecdote"}/>
      <Title text={"Anecdote with most votes"}/>
      <p>{mostVoted.anecdote} has {mostVoted.votes} votes</p>
    </div>
  )
}

const Button = ({text, onClick}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Title = ({text}) => {
  return (
    <>
    <h1>{text}</h1>
    </>
  )
}


export default App