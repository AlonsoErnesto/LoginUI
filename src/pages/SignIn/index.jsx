import img from "../../assets/images/img1.png";
import './style.css';

import Form from '../../components/Login/Form';
import ImgInteractive from '../../interface/ImgInteractive'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignUp from "../SignUp";


const SignIn = () => {

   const [password_true, setPassword_true] = useState(false);
   const [onAnimated, setOnAnimated] = useState(true);


   const navigate = useNavigate();
   const SignUpFunction = () => {
      setOnAnimated(false);
      // navigate("/signup");
   };


   return (
      <div className="background">
         <div className="body_center">
            <div className='center_card'>
               <div className='center_left'>
                  <img className='img1' src={img}/>
                  <h2 className='title_logo'>{onAnimated ? 'SingIn' : 'SignUp'}</h2>
                  <p>Inicia sesion o registrate en LoginUI para conocer nuevas emociones.</p>
               </div>
               <div className='center_right'>
                  { onAnimated ?
                     <div  style={{
                     
                      }}>
                        <ImgInteractive password_true={password_true}/>
                        <Form setPassword_true={setPassword_true} SignUpFunction={SignUpFunction}/>
                     </div>
                      : 
                      <SignUp/>
                  }
                  
               </div>
            </div>
         </div>
      </div>
   )
};

export default SignIn;