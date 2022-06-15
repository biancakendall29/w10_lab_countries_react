import { useState } from "react";

const Country = ({name, population, capital, index, visited}) => {

    const handleClick = () => {
        
    }

    return (
        <>
            <li key={index}>Country name: {name} Population: {population} Capital: {capital} <button id="visit-button" onClick={handleClick}>Visited country?</button></li> 
        </>    
        
    );
};

export default Country;


