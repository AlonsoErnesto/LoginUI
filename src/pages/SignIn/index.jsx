import img from "../../assets/images/img1.png";
import './style.css';

import Form from '../../components/Login/Form';
import ImgInteractive from '../../interface/ImgInteractive'
import { useState } from 'react';
import SignUp from "../SignUp";
import { Dna } from  'react-loader-spinner'



const SignIn = () => {

   const [password_true, setPassword_true] = useState(false);
   const [onAnimated, setOnAnimated] = useState(true);
   const [loading, setLoading] = useState(true)


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
                        <Form setPassword_true={setPassword_true} SignUpFunction={SignUpFunction} setLoading={setLoading}/>
                     </div>
                      : 
                      <SignUp setOnAnimated={setOnAnimated}/>
                  }
                  
               </div>
            </div>
         </div>
         { loading ?? 
            <Dna
            visible={loading}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{
               position:'relative',
               zIndex:'2',
               display:'flex',
               alignItems:'center',
               justifyContent:'center',
             }}
            wrapperClass="dna-wrapper"
            className="loading"
            />
         }
      </div>
   )
};

export default SignIn;