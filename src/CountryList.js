import Country from "./Country";
import { useState, useEffect } from "react";

const CountryList = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setCountries(data)
        }
        )
    }, []);       

    return (
        <>
        <ul>
            {countries.map(country => <Country name={country.name} 
            population={country.population} 
            capital={country.capital} 
            />)}
        </ul>
    
        {/* {console.log(JSON.parse(countries.map.googleMaps))} */}
        </>
    );
};

export default CountryList;
