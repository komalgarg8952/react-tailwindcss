import React from 'react';

const TimeComponent = ( props)=>{
    let BoxCss = ["bg-white","text-xs", "text-blue-600", "font-semibold", "box-border", "h-16", "w-24", "rounded-md", "inline-block", "text-center", "mx-1", "border","border-gray-400"].join(" ");

 if(props.active)
 {
   
    BoxCss =  ["bg-teal-400","text-xs", "text-white-600", "font-semibold", "box-border", "h-16", "w-24", "rounded-md", "inline-block", "text-center", "mx-1", "border","border-gray-400"].join(" ");

}   

return (<div onClick = {()=>props.showModal(props.id,props.time)}  className = {BoxCss}>
    {props.time}</div>

)
}

export default TimeComponent;