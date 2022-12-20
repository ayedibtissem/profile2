import { Component} from "react";

class Profile extends Component{
constructor(){

    super();
    this.state={
bio:" 'LEARN REACT JS' ",
profession:" STUDENT",
        
    };
}
render(){
let bio=this.state.bio;
let profession=this.state.profession;
return <div> 
    <img src="https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg" alt="hhh" style={{width:"200px"}} />
<h2 style={{color:"blue",marginLeft:"50px"}}>{bio}</h2>
<h3 style={{color:"blue",marginLeft:"50px"}}>{profession}</h3>


</div>;
}
}

export default Profile;