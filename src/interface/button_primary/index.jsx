import { useState,useEffect } from 'react';
import './style.css';

const ButtonPrimary =({placeholder,type,value,classname,fn}) => {

   const [style,setStyle] = useState('');

   useEffect(() => {
      switch (classname) {
         case 'btn_login':
            setStyle(classname);
            break;
         case 'btn_register':
            setStyle(classname);
            break;
         default:
            console.log(`No existe esta clase ${classname}`);
      } 
   }, [])
   

   return(
      <button
         placeholder={placeholder} 
         type={type} 
         className={`wave-btn ${style}`}
      >
         {value}
      </button>
   );
}

export default ButtonPrimary;