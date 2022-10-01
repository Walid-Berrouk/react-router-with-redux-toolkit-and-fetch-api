import React, { useState } from "react"
import PropTypes from "prop-types";

function Functionalcomponent({ name, lastName, age }) {
    const ageInDays = age.concat(' Days')
    return (
        <div>
            <h1>Hello I'm a Child Component of {name} {lastName}</h1>
            
        </div>
    )
}

Functionalcomponent.defaultProps = {
    name: "Somebody",
    lastName: "With some lastName"
}

Functionalcomponent.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
}

export default Functionalcomponent