
import './App.css';

import Search from './compoments/Search';
import axios from'axios'
import { useState,useEffect } from 'react';
import Table from './compoments/Table'


function App() {
  const [contries,setCountries]=useState([]);
  const [allcountires,setAllcountries]=useState([]);
  const [searchContry,setSearchContry]=useState('')

  const SearchContry=()=>{
    Event.preventDefault()
    setSearchContry(Event.target.value)


  }

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(res=>setAllcountries(res.data))
    .catch(error=>console.log(error))
  },[])


  return (
    <div className="App">

      
      
<Search/>
<Table allcountires={allcountires}/>

    </div>
  );
}

export default App;
