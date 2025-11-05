function Props_Destructuring({ name = "raghaw", age = 59, info: { marks = 12, attend = 11 } }) {

    // way two To destructure full props 

    // const { name, age } = props; now its aso work as directly

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{marks}</h1>
            <h1>{attend}</h1>
        </div>
    )
}

export default Props_Destructuring
