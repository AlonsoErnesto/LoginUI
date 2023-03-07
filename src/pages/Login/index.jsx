import img from "../../assets/images/img1.png";
import './style.css';

import Form from '../../components/Login/Form';
import ImgInteractive from '../../interface/ImgInteractive'
import { useState } from "react";


const LoginPage = () => {

   const [password_true, setPassword_true] = useState(false);

   return (
      <div className="background">
         <div className="body_center">
            <div className='center_card'>
               <div className='center_left'>
                  <img className='img1' src={img}/>
                  <h2 className='title_logo'>LoginUI</h2>
                  <p>Inicia sesion o registrate en LoginUI para conocer nuevas emociones.</p>
               </div>
               <div className='center_right'>
                  <ImgInteractive password_true={password_true}/>
                  <Form setPassword_true={setPassword_true}/>
               </div>
            </div>
         </div>
      </div>
   )
};

export default LoginPage;