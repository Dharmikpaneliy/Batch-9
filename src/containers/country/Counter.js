import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    const AddValue = () => {
        if(count < 10){
            setCount(count + 1);
        }
    };

    const RemoveValue = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };


    return (
        <div>
           <button onClick = {()=> RemoveValue()}>RE-VALUE</button>
           <input value={count.toLocaleString()} /> 
           <button onClick={() => AddValue()}>ADD-VALUE</button>
        </div>
    );
}

export default Counter;