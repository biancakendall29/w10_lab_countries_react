import './App.css';
import CountryList from './CountryList';
import { useRef, useEffect } from 'react';

function App() {

  const findAllCountries = () => {
    let i = 0
    return (
      fetch(`https://restcountries.com/v2/all`)
        .then(response => response.json())
        .then(data => data.map((country, index) => {
          <li> {country.name}</li>
        })
          // document.getElementById('list').innerHTML = `<li>${data[i++].name}</li>`
          // <ul>
          //   <li>{country.name}</li> 
          //   <li>{country.population}</li>
          // </ul>
          // setCountries(prev => [...prev, {name: country.name}])
          // console.log(country.name);
        )
    )
  }


  const inputValueRefCountryName = useRef();

  const findCountryByName = () => {
    let name = inputValueRefCountryName.current.value;
    console.log(name);
    return (
      fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => document.getElementById('list').innerHTML =
          `<li> ${data[0].name} </li> 
    <li> ${data[0].population} </li>
    <li> ${data[0].capital} </li>`
        )
    )
  }


  useEffect(() => {
    findCountryByName();
  }, []);



  return (
    <>
      <section id="section">
        <input type="text" ref={inputValueRefCountryName}></input><button onClick={findCountryByName}>Search</button>
        <button onClick={findAllCountries}>All</button>
      </section>
      <CountryList />
    </>

  );
}

export default App;
