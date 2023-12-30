import React from 'react';
import './App.css';
import LoginPage from './login_page';
import Dashboard from './Dashboard';
import {Route,Routes} from "react-router-dom"
function App() {
 return (
    <div className="relative bg-gray-900 w-screen h-screen grid place-content-center">
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
 );
}

export default App;