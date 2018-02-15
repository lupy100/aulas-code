import React from 'react'

let props = {
    className: 'note__control',
    type: 'button',
    onClick: () => {

    } 

}

    // formButton.addEventListener('click', props.click);
//props param
function FormButton(props, children) {
    // 1- elemento e uma tag burra
    // 2- elemento oque é elemento
    // 3- children
  return React.createElement('button', props, props.children)
}
   
export default FormButton;