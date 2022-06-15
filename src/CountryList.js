import Country from "./Country";
import { useState, useEffect } from "react";
import usePersistedState from "./usePersistedState";

const CountryList = () => {



    const [countries, setCountries] = usePersistedState('countries', localStorage.getItem('countries') ? JSON.parse(localStorage.getItem('countries')) : []);

    const [countriesId, setCountriesId] = usePersistedState('countriesId', 0);

    useEffect(() => {
        fetch(`https://restcountries.com/v2/all`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setCountries(data);
                setCountriesId(data.length);
            }
            )
    }, []);

    // const [visited, setVisited] = useState([]);
    // const handleClick = () => {
        
    //     // visitedCountries.push(`country name: ${name} population: ${population} capital: ${capital}`)
    //     setVisited(prev => [...prev, ])
    //     console.log(visited);
    // }


    return (
        <>
            <ul>
                {countries.map((country, index) => 
                    <Country key={index} name={country.name}
                        population={country.population}
                        capital={country.capital}
                        // handleClick={handleClick}
                    />
                )}
            </ul>

        </>
    );
};

export default CountryList;
