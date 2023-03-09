import './style.css';

const ButtonPrimary =({placeholder,type,value,classname,fn}) => {


   return(
      <button
         onClick={fn}
         placeholder={placeholder} 
         type={type} 
         className='wave-btn'
      >
         {value}
      </button>
   );
}

export default ButtonPrimary;