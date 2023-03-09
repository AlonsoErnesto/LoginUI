import Input from '../../../interface/inputText';
import ButtonPrimary from '../../../interface/button_primary';
import './style.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const userInfos = {
   email : '',
   password:'',
}


const FormSignIn = ({setPassword_true,SignUpFunction,setLoading}) => {
 
   const [user, setUser] = useState(userInfos);
   const [dataError, setDataError] = useState("")
   const {email,password} = user;

   const SignIn = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
         setLoading(false);
      }, 3000);
      console.log('first')
   };

   // Validation SignIn
   const SigninSchema = Yup.object({
      email:Yup.string().email('Email invalid.').required('Email is nedded.'),
      password:Yup.string().required('Password is required.')
   });

   const handleChangeSignIn = e => {
      const { name, value } = e.target;
      setUser({...user,[name]:value});
   }



   return (
      <div>
         <Formik
            enableReinitialize
            initialValues={{
               email,
               password,
            }}
            validationSchema={SigninSchema}
            onSubmit={e=>{
               console.log(e)
            }}
         >
         {(formik) => (
            <Form style={{position:'relative'}}>
              {/*  Email  */}
              <label className='label_form' htmlFor='email'>Email</label>               
              <Input placeholder='Email' name="email" type="email" id="email" onChange={handleChangeSignIn}/>
              {formik.errors.email && <div>{formik.errors.email}</div>}
              {/* password */}
              <label className='label_form' htmlFor='password'>Password</label>               
              <Input placeholder='Password' onfocus={setPassword_true} name="password" type="password" id="password" onChange={handleChangeSignIn}/>
              {/* Submit */}
              <ButtonPrimary type="submit" classname='btn_login' value="Sign In" fn={SignIn}/>
              <a onClick={SignUpFunction} className='signup_btn' >Sign Up</a>
            </Form>
         )}
         </Formik>
      </div>
   )
};

export default FormSignIn;