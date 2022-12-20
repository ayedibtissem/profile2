import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Component } from 'react';
import Profile from './components/Chekpoint/Profile';
import Timer from './components/Chekpoint/Timer';

    class APP extends Component{
constructor(){
  super();
  this.state={
    fullname:"AYED IBTISSEM",
  show:false,
  };
}
Showprofile=()=>{
this.setState({show:!this.state.show})
};



render (){
  let fullname=this.state.fullname;

  return <div className="d">
    
<h style={{color:"red"
}}>{fullname}</h>
<button onClick={()=>this.Showprofile()} >{this.state.show ? "hide Profile":"show Profile"}</button>
{this.state.show && <Profile/>}

<Timer></Timer>
  </div>;
   
}

    }

   
    export default APP;
    