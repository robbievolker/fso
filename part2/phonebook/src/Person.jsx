const Person = ({person, deletePerson}) => {
    
    return (
        <>
        <p>{person.name} {person.number} <button onClick={(event) => deletePerson(event, person)}>Delete</button></p>
        </>
    )
}

export default Person