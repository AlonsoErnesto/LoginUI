//Packages
import './App.css';
import {Route,Routes } from 'react-router-dom';

// Pages
import LoginPage from './pages/Login';
import SignIn from './pages/SegnIn'

const App = () => { 
  return (
    <div>
      <Routes>
        <Route path='/'  element={<LoginPage/>} exact/>
        <Route path='/signin'  element={<SignIn/>} exact/>
      </Routes>
    </div>
  )
}

export default App;
