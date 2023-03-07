import './style.css';

const ImgInteractive= ({password_true}) => {
   return (
      <div className="conteiner_img">
         <div className='circle_img'>
            <div className='head_img'>
               <div className={`${password_true ? 'eye_img_left_hover' : 'eye_img_left'} `}>

               </div>
               <div className={`${password_true ? 'eye_img_right_hover' : 'eye_img_right'}`}>
               </div>
            </div>
            <div className='body_img'>

            </div>
         </div>
      </div>
   )
}

export default ImgInteractive;