import React from "react";
import ts from "./Op.jpg";
function Photo(props){
    return(
        <div>
            <img src={ts}alt="imag"width={200}/>
            {props.children
           
    }
        </div>
    );

}
export default Photo;