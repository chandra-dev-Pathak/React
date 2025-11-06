import PropTypes from "prop-types";
// Installation (for React 18+)
// Command: - npm install prop - types

function Kid({ Name, Weight, Height, Graduate }) {
    return (
        <div>
            <h4>Kid Name:- {Name}</h4>
            <h4>Height:- {Height}</h4>
            <h4>Weight:- {Weight}</h4>
            <h4>Graduate:- {Graduate ? "Yes" : "No"}</h4>
        </div>
    )
}

Kid.propTypes = {
    Name: PropTypes.string.isRequired,
    Height: PropTypes.number,
    Weight: PropTypes.number,
    Graduate: PropTypes.bool
};

export default Kid
