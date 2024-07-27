import React from 'react'

const PersonCard = (props) => {
    const { firstName, age,color } = props;
    return (
        <div>
            <h1>
               {props.firstName} 
            </h1>
                       <h2>age: {age} </h2>
            <h3>hair color {color}</h3>
        </div>
    );
}

export default PersonCard