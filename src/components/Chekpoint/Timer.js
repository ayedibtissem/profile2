import { Component } from "react";
class Timer extends Component{
constructor(){
super();
this.state={
    timer:0,
    intervall:null,
};

}
componentDidMount(){
    this.setState({intervall:setInterval(()=>this.setState({timer:this.state.timer+1}),1000)})
};



render(){
    return <div>
        <h5 style={{color:"red",fontFamily:"serif",fontSize:"25px"}}>The Timer has mounted since {this.state.timer}</h5>
    </div>

}

}





export default Timer;