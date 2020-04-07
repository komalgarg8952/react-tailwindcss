import React from 'react';

const DateComponent = ( props)=>{
return (<div className = "box-border h-16 w-8 font-mono inline-block text-center mx-10">
    <div className = "text-base font-bold">{props.day}</div>
<div className = "text-2xl font-bold">{props.dateProp}</div>
</div>
)
}

export default DateComponent;