import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const [time,setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date())
    } 

    useEffect(() => {
            //componentDidmount , componentDidupdate
            const timeId = setInterval(()=>tick(),1000);
            return () =>{
                clearInterval(timeId);
            }
        },
   [time])

    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Timefun;