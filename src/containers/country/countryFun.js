import React, { useState } from 'react';
import Cityfun from './Cityfun';

function CountryFun(props) {

    const[Country,setCountry]=useState('India');
    const [gdp,setGDP] = useState(0)

    const changeCountry = () => {
        setCountry('uk')
    }

    return (
        <div>
            <p>Country:{Country}</p>
            <button onClick = {()=>changeCountry()}>Change</button>

            <p>GDP:{gdp}</p>
            <button onClick = {() => setGDP(6.5)}>Change GDP</button>

            <Cityfun fampla = {Country}/>
        </div>
    );
}

export default CountryFun;