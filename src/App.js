import React from 'react';

function App(props) {
  const data = [
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

    // destructure

    let[id1]=data;
    console.log(id1);


    console.log(data.map((i) => {return i})); 

    let med = data.filter((f) => {return f.expiry >= 2022});
    console.log(med);

    let ans = med.reduce((acc, d, i) => acc + d.price, 0);
    console.log(ans);

    let ans1 = data.reduce((acc, d, i) => acc + d.price, 0);
    console.log(ans1);


    return (
      <>
         <h4>Medicine Data</h4>
    <table border = "1">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Expiry</th>
        <th>Total-Price</th>
      </tr>
      <tbody>
        {
          data.map((data,index) => {
            return(
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.quantity}</td>
                <td>{data.price}</td>
                <td>{data.expiry}</td>
                {index === 0 ? <td rowspan = {data.length = "5"} > {ans1} </td> : null}  
              </tr>
            )
          })
        }
      </tbody>
    </table>
      </>
    );
}

export default App;