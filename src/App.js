import React from 'react';

function App(props) {
    let arrdata = 
    [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
          },
          {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
          },
          {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
          },
          {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
          },
          {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
          }
    ];
    
    console.log(arrdata.map((i) => {return i}));  //map

    console.log(arrdata.filter((g) => {return g.expiry >= 2022}));  //filter

    return (
        <div>
            {/* <h1>Hello</h1> */}
        </div>
    );
}

export default App;