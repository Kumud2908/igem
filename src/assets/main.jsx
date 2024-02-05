import React from 'react';
import videoBg from '../assets/videoBg.mp4';
import {useState} from 'react';
import earth_image from '../assets/earth_image.png'; 
import zoom from '../assets/zoom.mp4';


const Main=()=>{
    
    
    return (
        <div className='main'>
            <video src={videoBg} autoPlay loop muted/>
            <div className='earth'>
               
                <img src={earth_image} className='earth' style={{width:'5%'}}></img>
               
            </div>
            
                {/* <img 
                src={earth_image}
                 alt="myimage"
                  className="myimage"
                  
                /> */}
                
                
                
          
            
        </div>
    )
}
export default Main
