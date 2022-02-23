import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddressBook from "./views/AddressBook";
import UserDetails from './views/UserDetails';
import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [results, setResults] = useState([])
  useEffect(() => {
      axios.get("https://randomuser.me/api/?results=50")
       .then(res => {
           console.log(res.data.results)
           setResults(res.data.results)
       })
       .catch(err => console.log(err))
  },[])
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AddressBook results={results}/> }/>
        <Route path='/userDetails/:id' element={ <UserDetails results={results}/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
