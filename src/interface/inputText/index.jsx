import './style.css';

const Input = ({placeholder,name,type,id,value,onfocus,onChange}) => {

   return(
      <div className="input">
         <input 
            className="input_text"
            placeholder={placeholder} 
            name={name}
            type={type}
            id={id} 
            onChange={onChange}
            value={value}
            onFocus={(e)=>{
               if (e.currentTarget === e.target) {
                  onfocus(true);
                } 
              }}
              onBlur={(e) => {
                if (e.currentTarget === e.target) {
                  onfocus(false); 
                }
            }}
         />
      </div>
   )
};

export default Input;