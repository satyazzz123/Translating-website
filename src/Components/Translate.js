import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from 'react-icons/bs';
import {BsFillMicMuteFill} from 'react-icons/bs'
import {AiOutlineReload} from 'react-icons/ai';
import { GiSpeaker } from 'react-icons/gi';
import axios from 'axios';

export default function Translate() {





const[options,setptions]=useState([])
const[to,setto]=useState('en');
const[from,setfrom]=useState('en')
const[input,setinput1]=useState("")
const[output,setoutput1]=useState("")
const translate=()=>{
  const params=new URLSearchParams();
  params.append('q',input);
  params.append('source',from);
  params.append('target',to);
  params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
  axios.post("https://libretranslate.de/translate",params,
  {headers:{ 'accept':'application/json', 'Content-Type':'application/x-www-form-urlencoded'}}).then(
    res=> 
    {console.log(res.data)
      setoutput1(res.data.translatedText)
     
    
    }

  )
}





useEffect(()=>{
  axios.get("https://libretranslate.de/languages",
    {headers:{'accept':'application/json'}}).then(
      res=>{
        console.log(res.data);
        setptions(res.data)
      }
    )
  
  

},[])












  const[show,setshow]=useState("none");
  const mic_hover=function(){
   
    setshow("block")
   
    
  }
  const mic_out=function(){
    setshow("none")
  }






  const [ourText, setOurText] = useState("")
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg) => {
    msg.text = output
    window.speechSynthesis.speak(msg)
  }



    
    
    
  
 


    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
    

  return (
    <div className="translate" style={{background:"#2C3532",height:"80rem"}} >
     <div className="input_lang">
     <select id="input-word" value={from} onChange={e=>setfrom(e.target.value)} placeholder='Enter' >
  {
    options.map(
      opt=> <option value={opt.code}>{opt.name}</option>
      
    )
  }
  

    


</select>

        <textarea placeholder='Enter or Speak'
       
        
        
        value={listening?(transcript):(input)}  onChange={e=>setinput1(e.target.value)} id='input-display'>
              
        </textarea>

 



     <div  onMouseEnter={mic_hover} onMouseOut={mic_out} style={{position:"absolute",top:"84.7%",left:"8%",fontSize:"2rem",color:"white"}} >   <BsFillMicFill onMouseEnter={mic_hover} onMouseOut={mic_out} onClick={SpeechRecognition.startListening} /></div>
        <div  style={{position:"absolute",top:"85%",left:"10%",fontSize:"1.5rem",color:"white",display:`${show}`}}>
          Click to speak
        </div>
        <AiOutlineReload onClick={resetTranscript}   style={{position:"absolute",top:"84.7%",left:"36.5%",fontSize:"2rem",color:"white",}} />
     </div>
     <div className="output_lang">
     <form />
  
  <select value={to} onChange={e=>setto(e.target.value)} placeholder='Enter' id="output-word">
 
  {
    options.map(
      opt=> <option value={opt.code}>{opt.name}</option>
      
    )
  }
  

  </select>
  



        
        
        <textarea 
        type='text'
        value={output}
        placeholder='Enter Text'
         id="output-display">
                    
        </textarea>
        <a style={{position:"absolute",top:"84.7%",right:"6.5%",fontSize:"2rem",color:"white",}}onClick={() => speechHandler(msg)}><GiSpeaker/></a>
     </div>
 <button onClick={()=>translate()}>translate</button>
    </div>
  )
}
