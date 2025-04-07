import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Person from './Person'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('add a name...')
  const [newNumber, setNewNumber] = useState("0000")
  const [searchName, setNewSearchName] = useState("Set a new name")

  useEffect(() => {
    console.log('effect')
    personService.getAll()
      .then(persons => setPersons(persons))
  }, [])
  console.log('render', persons.length, 'persons')

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNewSearch = (event) => {
    setNewSearchName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    let found = false
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        found = true;
        break;
      }
    }
    if (found == false) {
      const newPerson =  {name : newName, number : newNumber}

      personService.create(newPerson)
        .then(person => {
          setPersons(persons.concat(person))
          setNewName('')})
      console.log(newPerson)
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const deletePerson = (event, person) => {
    event.preventDefault()
    const confirmDelete = confirm(`Are you sure you want to delete ${person.name}`)
    if (confirmDelete === true) {
      personService.remove(person.id)
        .then(response => personService.getAll()
          .then(persons => setPersons(persons))
        )
    }
  }

  const filterResults = (searchName) => {
    console.log(persons)
      let toRender = persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
      toRender = toRender.map((person) => <Person key={person.id} person={person} deletePerson={deletePerson}/>)
      return toRender
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter shown with <input value={searchName} onChange={handleNewSearch}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterResults(searchName)}
    </div>
  )
}

export default App
