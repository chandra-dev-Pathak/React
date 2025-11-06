import Card from './Card.jsx'
import Button from './Button.jsx'
import Mixed_Props from './Mixed_Props.jsx'

// children cannot be renamed
// It is a built-in prop in React
// You can only receive it as props.children or { children }

function Children_Prop() {
    return (
        <>

            <Card>
                <h1>Hello</h1>
                <p>This is inside card</p>
            </Card>

            <Button>click Me</Button>
            <Button>Save Me</Button>
            <Button>Buy-500</Button>

            <Mixed_Props name='Chandra dev pathak' age={14}>
                <p>course:- DSA, OOP</p>
            </Mixed_Props>

        </>
    )
}

export default Children_Prop
