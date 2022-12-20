
//import { string } from 'prop-types';
import React from 'react';
//import { propTypes } from 'react-bootstrap/esm/Image';
import PropTypes from 'prop-types';
    function Pro ({fullname,bio,profession,fun},props){
     return (
        <div >
          
      <p className='bc' style={{color:"black",fontFamily:"serif",fontSize:"25px",marginLeft:"87px"}}>MY NAME IS:{fullname}</p>
      <p className='nc' style={{color:"black",fontsize:"150px",marginLeft:"87px",fontSize:"25px"}}>BIO:{bio}</p>
      <p className='cc' style={{color:"black",fontsize:"45px",fontFamily:"serif",fontSize:"25px",marginLeft:"87px"}}>PROFESSION:{profession}</p>
<button onClick={fun} style={{color:"blue",fontSize:"25px",marginLeft:"180px",marginTop:"65px"}}>ALERT</button>
{props.children}
       </div>
      );
    }
    export default Pro
    Pro.prototypes={
      fullname:  PropTypes.string,
      bio: PropTypes.string,
      profession:PropTypes.string,
      fun:PropTypes.func,
    };
   // Pro.defaultProps={
      //fullname:"unknown",
   // };
                                           