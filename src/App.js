import React, { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';
import Branch from './containers/country/Branch';
import Cityfun from './containers/country/Cityfun';
import CountryFun from './containers/country/countryFun';
import Home from './containers/Home/Home';
import Time from './DT/Time';
import Timefun from './DT/Timefun';

const HomeWithLoading = Loading(Home)

function App(props) {
  const[loading,setLoading] = useState(false);
  const[data,setData] = useState([]);

  let orgData = [
    {id: 101, name:"Amit"},
    {id: 102, name:"Kevin"},
    {id: 103, name:"Piyush"}
  ]

  useEffect(
    () => {
      setLoading(true);
      setTimeout(()=>{setLoading(false); setData(orgData)},3000);
    },
  [])

  console.log(loading,data);

  return (
  <>
      <HomeWithLoading
         isLoading={loading}
         data={data}
      />    
  </>
  );
};
       
  
export default App;