function Props_pass(Props) {

    let card = {
        border: "1px solid black",
        width: 'fit-content',
        borderRadius: '20px',
        padding: "20px"
    }

    return (
        <>
            <div style={card}>
                <h3>Student Name:- {Props.name}</h3>
                <h3>Age:- {Props.age || 12}</h3>
                <h3>Regular:- {Props.regular ? 'yes' : 'no'}</h3>
                <h3>1Year Course:- {Props.course?.first_year || "MBA"}</h3>
                <h3>2Year Course:- {Props.course?.second_year || "MCA"}</h3>
                <h3>Project:- {Props.project}</h3>
            </div>
        </>
    )
}

export default Props_pass
