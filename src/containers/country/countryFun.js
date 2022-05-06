import React, { useState } from 'react';

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
        </div>
    );
}

export default CountryFun;