import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sidenav(props) {








     
    const[show,setShow]=useState("none")
    const[show1,setShow1]=useState("none")
    const[show2,setShow2]=useState("none")
    const[show3,setShow3]=useState("none")
    const[show4,setShow4]=useState("none")
    const[show5,setShow5]=useState("none")
    const[show6,setShow6]=useState("none")
    const[show7,setShow7]=useState("none")
    const[show8,setShow8]=useState("none")
    const[show9,setShow9]=useState("none")


    let mousein1=function(){
        setShow("block")}
        let mousein2=function(){
            setShow1("block")}
            let mousein3=function(){
                setShow2("block")}
                let mousein4=function(){
                    setShow3("block")} 
                    let mousein5=function(){
                        setShow4("block")} 
                        let mousein6=function(){
                            setShow5("block")}
                            let mousein7=function(){
                                setShow6("block")}
                                let mousein8=function(){
                                    setShow7("block")}
                                    let mousein9=function(){
                                        setShow8("block")}
                                        let mousein10=function(){
                                            setShow9("block")}
    let mouseout=function(){
        setShow("none")
    }
    let mouseout1=function(){
        setShow1("none")
    }
    let mouseout2=function(){
        setShow2("none")
    }
     let mouseout3=function(){
        setShow3("none")
    }
    let mouseout4=function(){
        setShow4("none")
    }
    let mouseout5=function(){
        setShow5("none")
    }
    let mouseout6=function(){
        setShow6("none")
    }
    let mouseout7=function(){
        setShow7("none")
    }
    let mouseout8=function(){
        setShow8("none")
    }
    let mouseout9=function(){
        setShow9("none")
    }
    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])
  return (
    <div>
      <div className="nav">

           <a id='adot1' onMouseOver={mousein1} onMouseOut={mouseout}  className='dot' href="#intro"><li></li></a> <div id='dot1' className="dot-text" style={{position:"fixed",top:"4.1rem",left:"4.6rem",display:`${show}`,color:"white",background:"black",borderRadius:"0.5rem",fontSize:"1.8rem" }}>Intro</div>
          
           <a    id='adot1' onMouseOver={mousein2} onMouseOut={mouseout1}      className='dot' href="#diff_voice"><li></li></a> <div id='dot2' className="dot-text" style={{position:"fixed",top:"11rem",left:"4.6rem",display:`${show1}`,color:"white",background:"black",borderRadius:"0.5rem",fontSize:"1.8rem" }}>Diffferent voices same mind</div>

           
           <a   id='adot1' onMouseOver={mousein3} onMouseOut={mouseout2}       className='dot' href="#asia"><li></li></a> <div id='dot3' className="dot-text" style={{position:"fixed",top:"18rem",left:"4.6rem",display:`${show2}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Our Asian Tranlsate</div>
          
           
           <a   id='adot1' onMouseOver={mousein4} onMouseOut={mouseout3}       className='dot' href="#euro"><li></li></a> <div  id='dot4' className="dot-text" style={{position:"fixed",top:"24.8rem",left:"4.6rem",display:`${show3}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Our European Translate</div>
          
           
           <a   id='adot1' onMouseOver={mousein5} onMouseOut={mouseout4}       className='dot' href="#africa"><li></li></a>  <div  id='dot5' className="dot-text" style={{position:"fixed",top:"31.6rem",left:"4.6rem",display:`${show4}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Our African Translate</div>
          
           
           <a    id='adot1' onMouseOver={mousein6} onMouseOut={mouseout5}     className='dot' href="#N_america"><li></li></a> <div  id='dot6' className="dot-text" style={{position:"fixed",top:"38.12rem",left:"4.6rem",display:`${show5}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Our North-American Translate</div>
          
           
           <a    id='adot1'onMouseOver={mousein7} onMouseOut={mouseout6}      className='dot' href="S_america"><li></li></a> <div  id='dot7' className="dot-text" style={{position:"fixed",top:"45rem",left:"4.6rem",display:`${show6}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Our South-American Translate</div>
          
           
           <a   id='adot1' onMouseOver={mousein8} onMouseOut={mouseout7}      className='dot' href="aus"><li></li></a> <div  id='dot8' className="dot-text" style={{position:"fixed",top:"52rem",left:"4.6rem",display:`${show7}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Our Australian Translate</div>
          
           
           <a   id='adot1' onMouseOver={mousein9} onMouseOut={mouseout8}       className='dot' href=""><li></li></a> <div  id='dot9' className="dot-text" style={{position:"fixed",top:"58.6rem",left:"4.6rem",display:`${show8}`,color:"white",background:"black",borderRadius:"1rem",fontSize:"1.8rem"}}>Language not a barrier these days anymore</div>
          
           
        
          
      </div>
    </div>
  )
}
