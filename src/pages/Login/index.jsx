import Form from '../../components/Login/Form';
import './style.css';
import img from "../../assets/images/img1.png";


const LoginPage = () => {
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
                  <Form/>
               </div>
            </div>
         </div>
      </div>
   )
};

export default LoginPage;