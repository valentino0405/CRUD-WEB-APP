import logo from './logo.svg';
import './App.css';

import Adduser from './Component/AddUser';
import NavBar from './Component/NavBar';
import AllUsers from './Component/AllUsers';
import CodeForInterview from './Component/CodeForInterview';

import {BrowserRouter,Routes,Route } from 'react-router-dom';
import EditUser from './Component/EditUser';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      < Route path='/' element={<CodeForInterview/>}/>
      < Route path='/all' element={<AllUsers/>}/>
      < Route path='/add' element={<Adduser/>}/>
     <Route path='/edit/:id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
