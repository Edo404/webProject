//PROPS
//Read only properties that are shared between components.
//A parent component can send data to a child component.
//<Component key=value />

//import a file of node-modules "prop-types"
//import PropTypes from 'prop-types' 

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

/*
SHOULD CHECK THE TYPE OF EACH PROP

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
*/
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student