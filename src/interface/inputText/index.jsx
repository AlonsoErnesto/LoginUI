import './style.css';

const Input = ({placeholder,name,type,id,value,onfocus}) => {

   return(
      <div className="input">
         <input 
            className="input_text"
            placeholder={placeholder} 
            name={name}
            type={type}
            id={id} 
            value={value}
            onFocus={onfocus}
         />
      </div>
   )
};

export default Input;