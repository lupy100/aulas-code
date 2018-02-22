import React from 'react'

//tipo 1 = sem arrow 
const FormButton = ({children, ...props}) => (

 <button {...props}>{children}</button>
)


export default ({ children, ...props }) => <button {...props}>{children}</button>