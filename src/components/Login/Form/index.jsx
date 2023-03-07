import Input from '../../../interface/inputText';
import ButtonPrimary from '../../../interface/button_primary';
import './style.css';

const Form = ({setPassword_true}) => {
 


   return (
      <div className='form'>
         <form>
            {/*  Email  */}
            <label className='label_form' htmlFor='email'>Email</label>               
            <Input placeholder='Email' name="email" type="email" id="email"/>
            {/* password */}
            <label className='label_form' htmlFor='password'>Password</label>               
            <Input placeholder='Password' onfocus={setPassword_true} name="password" type="password" id="password"/>
            {/* Submit */}
            <ButtonPrimary type="submit" classname='btn_login' value="Login"/>
         </form>
      </div>
   )
};

export default Form;