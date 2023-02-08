import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';



export default function Contact() {
 
const mouseupline=function(){
  let a=document.getElementById("fac")

  let b=document.getElementById("cont1")
  
  a.style.transform="translateX(-6rem)"
  a.style.color="grey"
  b.style.transform="translateX(0rem)"
  
b.style.right="0rem"
a.style.animationDuration="2s"
b.style.animationDuration="2s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"

}
const mouseouticon=function(){
  let a=document.getElementById("fac")

  let b=document.getElementById("cont1")
  a.style.transform="translateX(0rem)"
  a.style.color="white"
  b.style.transform="translateX(10rem)"
  

a.style.animationDuration="1.56s"
b.style.animationDuration="1.56s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"



}
const mouseupline1=function(){
  let a=document.getElementById("ins")

  let b=document.getElementById("cont2")
  
  a.style.transform="translateX(-7rem)"
  b.style.transform="translateX(0rem)";
  a.style.color="grey"
  
b.style.right="0rem"
a.style.animationDuration="2s"
b.style.animationDuration="2s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"

}
const mouseouticon1=function(){
  let a=document.getElementById("ins")

  let b=document.getElementById("cont2")
  a.style.transform="translateX(0rem)"
  b.style.transform="translateX(10rem)"
  a.style.color="white"
  

a.style.animationDuration="1.56s"
b.style.animationDuration="1.56s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"



}
const mouseupline2=function(){
  let a=document.getElementById("lin")

  let b=document.getElementById("cont3")
  
  a.style.transform="translateX(-7rem)"
  b.style.transform="translateX(0rem)"
  a.style.color="grey"
  
b.style.right="0rem"
a.style.animationDuration="2s"
b.style.animationDuration="2s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"

}
const mouseouticon2=function(){
  let a=document.getElementById("lin")

  let b=document.getElementById("cont3")
  a.style.transform="translateX(0rem)"
  b.style.transform="translateX(10rem)"
  a.style.color="white"
  

a.style.animationDuration="1.56s"
b.style.animationDuration="1.56s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"



}
const mouseupline3=function(){
  let a=document.getElementById("twi")

  let b=document.getElementById("cont4")
  
  a.style.transform="translateX(-5.9rem)"
  b.style.transform="translateX(0rem)"
  a.style.color="grey"
  
b.style.right="0rem"
a.style.animationDuration="2s"
b.style.animationDuration="2s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"

}
const mouseouticon3=function(){
  let a=document.getElementById("twi")

  let b=document.getElementById("cont4")
  a.style.transform="translateX(0rem)"
  b.style.transform="translateX(10rem)"
  a.style.color="white"
  

a.style.animationDuration="1.56s"
b.style.animationDuration="1.56s"
a.style.transitionTimingFunction="ease-in-out"
b.style.transitionTimingFunction="ease-in-out"



}
  return (
    <div>
      <div className="contact">
        <div style={{height:"5rem",fontSize:"2rem" }}> <span style={{position:"absolute",right:"0rem"}} id='fac' onMouseEnter={mouseupline} onMouseOut={mouseouticon}  ><BsFacebook/></span> <span style={{position:"absolute",right:"-10rem"}} id='cont1' className='cont' onMouseEnter={mouseupline} onMouseOut={mouseouticon}   >Share</span></div>
        <div  style={{height:"5rem",fontSize:"2rem"}}>  <span style={{position:"absolute",right:"0rem"}} id='ins' onMouseEnter={mouseupline1} onMouseOut={mouseouticon1} ><BsInstagram/></span> <span id='cont2' className='cont' style={{position:"absolute",right:"-10rem"}} onMouseEnter={mouseupline1} onMouseOut={mouseouticon1} >Follow</span></div>
        <div  style={{height:"5rem",fontSize:"2rem"}}>  <span id='lin' style={{position:"absolute",right:"0rem"}}     onMouseEnter={mouseupline2} onMouseOut={mouseouticon2}  >< BsLinkedin/></span> <span id='cont3' style={{position:"absolute",right:"-10rem"}} className='cont' onMouseEnter={mouseupline2} onMouseOut={mouseouticon2} >Follow</span></div>
        <div  style={{height:"5rem",fontSize:"2rem"}}> <span  id='twi' style={{position:"absolute",right:"0rem"}}     onMouseEnter={mouseupline3} onMouseOut={mouseouticon3} ><BsTwitter/></span> <span id='cont4'  style={{position:"absolute",right:"-10rem"}} className='cont' onMouseEnter={mouseupline3} onMouseOut={mouseouticon3} >Tweet</span></div>
      </div>
    </div>
  )
}
