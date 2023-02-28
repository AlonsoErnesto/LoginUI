import Input from '../../../interface/inputText';
import './style.css';

const Form = () => {
   return (
      <div className='form'>
         <form>
            <label htmlFor='email'>Email</label>               
            <Input placeholder='Email' name="email" type="email" id="email"/>
         </form>
      </div>
   )
};

export default Form;