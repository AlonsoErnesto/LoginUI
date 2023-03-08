//Packages
import './App.css';
import {Route,Routes } from 'react-router-dom';

// Pages
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const App = () => { 
  return (
    <div>
      <Routes>
        <Route path='/'  element={<SignIn/>} exact/>
        <Route path='/signin'  element={<SignIn/>} exact/>
        {/* <Route path='/signup'  element={<SignUp/>} exact/> */}
        <Route path='/*'  element={<div>Error 404 no found</div>} exact/>
      </Routes>

    </div>
  )
}

export default App;
