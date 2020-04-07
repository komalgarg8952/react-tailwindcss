import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import DateComponent from './DateComponent/DateComponent';
import TimeComponent from './TimeComponent/TimeComponent';
import ModalComponent from './ModalComponent/Modal';


const dateArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const timearray = ["8AM","9AM","10AM","11AM","12PM","1PM","2PM"];

const initialState = {
  tiles:timearray.map((item, index) => {
   return{"itemName":item ,"array": dateArray.map((inneritem)=>{
    return {
     name: item+inneritem,
     active: false,
     value:item,
     id:item+inneritem,
    }
 })} 
  })
}


class App extends Component {
  state = {
    booked:[...initialState.tiles],
    showModal:false
  }
showModalHandler = (id,name)=>{
  const copyStateArray = [...this.state.booked];
  let specificArray;
  for(var i=0;i<copyStateArray.length;i++)
  {
    if(copyStateArray[i].itemName === name)
    {
      specificArray = [...copyStateArray[i].array];
      for(var j=0;j<specificArray.length;j++)
      {
        if(specificArray[j].id === id)
        {
          if(specificArray[j].active)
          {
            this.setState({showModal:specificArray[j].active})
            
          }
          specificArray[j].active =true;
          break;
        }
      }
      copyStateArray[i].array = specificArray;
      break;
    }
  }
  this.setState({
    booked:copyStateArray
  })
  
 
  
  
}
closeModal = ()=>{
  console.log("komal")
  this.setState({showModal:false})
}
render()
{
  
  let date = new Date();
  let showTime = this.state.booked.map((item,index)=>{
    const tempTime =  item.array.map((inneritem,innerindex)=>
     ( <TimeComponent  time = {inneritem.value}
     key = {inneritem.name}
     showModal = {this.showModalHandler}
     active = {inneritem.active}
     id = {inneritem.id}/>
  ))
  return (<div key = {item+index} className = "pt-4 "><span className = "text-base text-left px-4 font-bold">{item.itemName}</span>{tempTime}</div>)
  })
 
  let showDate = dateArray.map((item,index)=>{
    let dateTemp = date.getDate()+index ;
    let newDate = new Date();
    newDate.setDate(dateTemp)
    return (<DateComponent day = {dateArray[newDate.getDay()]} 
      dateProp = {newDate.getDate()}
      key = {item}/>)
  })
  
 
 

  return (
    <div className = "font-mono container mx-auto  pt-2">
     <div className= "mb-12 text-base font-bold w-full">
       <div className = "text-2xl font-bold inline-block px-4 mx-4">Bounce<span className = "rounded-full bg-teal-500 h-2 inline-block w-2"></span>House</div>
       <div  className = "inline-block text-center mx-2"><i className = "fa fa-calendar "> </i>
       <div>Schedule</div></div>
       <div className = "inline-block text-center mx-2"><i className = "fa fa-comment "></i>
       <div>Messages</div></div>
       <div className = "inline-block text-center mx-2"><i className = "fa fa-user-circle"></i><div>Contact</div></div>
       <div className = "inline-block text-center mx-4 h-8 border border-gray-300"></div>
       <div className = "inline-block  text-center mr-2 "><i className = "fa fa-desktop"></i><div>Website  </div></div>
       <div className = "inline-block text-center mx-2"><i className = "fa fa-edit"></i><div>Blog</div></div>
       <div className = "inline-block text-center mx-2"><i className = "fa fa-bookmark"></i><div>Newsletter</div></div>
       <div className = "inline-block text-center mx-2"><i className = "fa fa-envelope"></i><div>Social</div></div>
       <div className = "inline-block text-center float-right mr-1"><i className = "fa fa-heart"></i><div>Activity</div></div>
       </div>
     
     <div className = "text-center">
     {showDate}
      {showTime}
      <ModalComponent show = {this.state.showModal} closeModal = {this.closeModal} >
        <div className = "fa fa-times text-gray-400 float-left mb-4 " onClick = {this.closeModal} ></div>
        <div className = "text-2xl font-bold">Justin Canetti</div>
         <div className = "pb-4 font-bold">Monay, April 5 at 9AM</div>
         <div className = "text-base text-teal-400 "><i className = "fa fa-refresh inline-block mr-2"></i><div className = "inline-block ">Repeat Every Day</div></div>
         <button className = "mt-8 bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 mr-4 rounded">Reschedule</button>
         <button onClick = {this.closeModal} className = "mt-8 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-8 border border-blue-700 rounded">Cancel</button>
      </ModalComponent>
      </div>  
     
      
     
    </div>
  );
}

}

export default App;
