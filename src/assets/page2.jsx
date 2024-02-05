import React from "react";
import Navbar from '../assets/navbar';
import virus from './icons/5909.jpg';
import BackgroundSlider from "./backgroundSlider";

const Page2=()=>{
    return(
        <div className="page2-main">
        <Navbar/>
        <div className="Page2-side">
            <div className="myhead"><h1>BIO-Yeast</h1></div>
            <div className="page-list">
                <ul className="page2-list">
                <li className="li-ele1"><div className="mytext1">
                The production of vitamins from yeast 
                cells involves a process known as fermentation. Specifically, certain strains of yeast can be genetically engineered or naturally occurring to synthesize specific vitamins during fermentation. Here's 
                a general overview of the process:
                </div>
                </li>
                <li className="li-ele">
                <div className="myimage">
                    <img src={virus} className="myimage2"/>
                </div>
                </li>
                </ul>
                <div className="page2-bottom">
                    <BackgroundSlider/>


                </div>

            </div>

        </div>
        </div>
    )
}
 export default Page2;