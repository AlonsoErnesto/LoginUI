import Input from '../../../interface/inputText';
import ButtonPrimary from '../../../interface/button_primary';
import './style.css';
import SignUp from '../../../pages/SignUp'

const Form = ({setPassword_true,SignUpFunction}) => {
 


   return (
      <div>
        <form style={{position:'relative'}}>
           {/*  Email  */}
           <label className='label_form' htmlFor='email'>Email</label>               
           <Input placeholder='Email' name="email" type="email" id="email"/>
           {/* password */}
           <label className='label_form' htmlFor='password'>Password</label>               
           <Input placeholder='Password' onfocus={setPassword_true} name="password" type="password" id="password"/>
           {/* Submit */}
           <ButtonPrimary type="submit" classname='btn_login' value="Sign In"/>
           <a onClick={SignUpFunction} className='signup_btn' >Sign Up</a>
        </form>
      </div>
   )
};

export default Form;