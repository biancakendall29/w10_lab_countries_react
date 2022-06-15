import Country from "./Country";
import { useState, useEffect } from "react";
import usePersistedState from "./usePersistedState";

const CountryList = () => {

    const [countries, setCountries] = usePersistedState('countries', localStorage.getItem('countries') ?  JSON.parse(localStorage.getItem('countries')) : []);

    const [countriesId, setCountriesId] = usePersistedState('countriesId', 0);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setCountries(data);
            setCountriesId(id => data.length);
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
