import React, { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import Branch from './containers/country/Branch';
import Cityfun from './containers/country/Cityfun';
import CountryFun from './containers/country/countryFun';
import Du_Home from './containers/Home/Du_Home';
import Home from './containers/Home/Home';
import Time from './DT/Time';
import Timefun from './DT/Timefun';

// const HomeWithLoading = Loading(Du_Home)
const HomeWithLoading = Loading(Du_Home)



function App(props) {
  const[loading,setLoading] = useState(false);
  const[data,setData] = useState([]);
  
  let orgData = [ 
    {id: 101, name:"Amit"},
    {id: 102, name:"Kevin"},
    {id: 103, name:"Piyush"},
    {id: 104, name:"Dharmik"},
    {id: 105, name:"Kuldip"}
  ]

  useEffect(
    () => {
      setLoading(true);
      setTimeout(()=>{setLoading(false); setData(data)},3000);
    },
  [])

  // console.log(loading,data);

  return (
  <>
      <HomeWithLoading
         TryLoading={loading}
         data={data}
      />    
  </>
  );
};
       
  
export default App;