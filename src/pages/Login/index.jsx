import Form from '../../components/Login/Form';
import './style.css';

const LoginPage = () => {
   return (
      <div className="background">
         <div className="body_center">
            <div className='center_card'>
               <div className='center_left'>
                  <img src="../../assets/images/LoginImg.png"/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.    Nostrum sit ipsa voluptatum culpa molestiae explicabo odit  pariatur dolor id fugiat.</p>
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