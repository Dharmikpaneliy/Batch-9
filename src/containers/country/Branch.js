import React from 'react';

function Branch(props) {

    const[Branch,setCountry]=useState('RW1');

    const changeBranch = () => {
        setBranch('RW2')
    }

    return (
        <div>
            <p>Branch:{Branch}</p>
            <button onClick = {()=>changeBranch()}>Change</button>
        </div>
    );
}

export default Branch;