import ButtonPrimary from "../../interface/button_primary";
import Input from "../../interface/inputText";
import './style.css'

const SignUp =({setOnAnimated}) => {
   return (
      <div className="container">
         <div className="form">
            <form style={{position:'relative'}}>
               {/* First Name */}
               <label htmlFor="name">Name</label>
               <Input placeholder="Name" type="text" id="name" name="name" />
               {/* Last name */}
               <label htmlFor="last_name">Last Name</label>
               <Input placeholder="Last name" type="text" id="last_name" name="last_name"/>
               {/* E-mail */}
               <label htmlFor="email">Email</label>
               <Input placeholder="Email" type="email" id="email" name="email"/>
               {/* Password */}
               <label htmlFor="password">Password</label>
               <Input placeholder="password" type="password" id="password" name="password"/>
               <ButtonPrimary value="Sign Up"/>
               <a className='signin_btn' onClick={()=>setOnAnimated(true)}>Sign In</a>
            </form>
         </div>
      </div>
   )
}

export default SignUp;