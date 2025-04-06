const Course = ({course}) => {
    const contents = course.parts
    return (
    <>
        <h2>{course.name}</h2>
        {contents.map(part => <p key={(part.id)}>{part.name} {part.exercises}</p>)}
        <b>total of exercises {course.parts.reduce((s, p) => s + p.exercises, 0)}</b>
    </>
    )
}

export default Course