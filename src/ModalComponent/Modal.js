import React from 'react';
import classes from './Modal.module.css'
import BackDrop from '../BackDrop/BackDrop'
 
const Modal = (props)=>(
 <>
 <BackDrop show={props.show} close = {props.closeModal}></BackDrop>
 <div className = {classes.Modal}
 style = {{opacity:props.show?'1':'0', 
 transform : props.show ? 'translateY(0)':'translateY(-100vh)'}}>
 {props.children}
 </div>
 
 </>
);
 



 
export default Modal;