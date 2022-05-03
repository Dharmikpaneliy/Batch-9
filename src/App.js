import React from 'react';

function App(props) {
    const arrdata = 
    [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      }
    ];
    
    arrdata.map((value,index) => console.log(value.name,value.age,value.salary,value.bonus,value.status));

    let ans = 
            arrdata.filter((d,i) => d.status == true)
            .reduce((bou,d,i) => bou + d.salary,0);

    let obj = {
               id : 100 , 
               name : "Dharmik"
              };
    let {id,name} = obj;
    console.log(id,name);


    return (
      <>
        <table border="1">
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>Bouns</td>
            <td>Status</td>
            <td>Total</td>
          </tr>
          {
            arrdata.map((value,index) => 
            {
              return(
                <tr>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.salary}</td>
                  <td>{value.bouns}</td>
                  <td>{value.status}</td>
                  {index === 0?<td rowspan={arrdata.length}>{ans}</td>:null}
                </tr>
              )
            })
          }
        </table>
      </>
    );
}

export default App;