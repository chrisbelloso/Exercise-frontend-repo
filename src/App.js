import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddressBook from "./views/AddressBook";
import UserDetails from './views/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AddressBook/> }/>
        <Route path='/userDetails/:id' element={ <UserDetails/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
