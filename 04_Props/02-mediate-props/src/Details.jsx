function Details({ name = "Raghaw", age = 24, children = "No content", hooby }) {
    // NEW Method
    return (
        <div>
            <h4>name:- {name}</h4>
            <h4>age:- {age}</h4>
            <h4>hooby:- {hooby || "Programming"} </h4>
            {/* One More for Default value By JavaScript Style */}

            <div>
                {children}
            </div>
        </div>
    )
}
// So around 3–4 years since it's no longer recommended.

// Details.defaultProps = {
//     name: "Guest",
//     age: 14
// };


export default Details
