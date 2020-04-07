import React from 'react';

 
const BackDrop = (props)=>(
 props.show?<div className = "w-full h-full fixed left-0 top-0 z-100 bg-blackTransparent opactiy-50" onClick = {props.close}></div>:null
)
export default BackDrop;