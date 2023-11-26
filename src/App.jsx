import "./index.css"
import { AiFillSound } from "react-icons/ai";
import audio1 from "./assets/audio1.mp3"
import { useState } from "react";
import useSound from "use-sound";
import { useEffect } from "react";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";




const App = () => {

  const [isPlaying, setPlaying] = useState(false);
  const [play, { stop }] = useSound(audio1, { volume: 1 });

  const [ex,exSet] = useState(false)

  const playSound = () => {
    if (!isPlaying) {
      play();
      setPlaying(true);
    }
  };

  const pauseSound = () => {
    stop();
    setPlaying(false);
  };

  useEffect(() => {
    // Cleanup when the component unmounts
    return () => {
      stop();
    };
  }, [stop]);

  function handleValue(){
    var nameuser=document.getElementById("text1")
    var value1 = document.getElementById("text2")
    var value2 = value1.value
    var nameuser2 =nameuser.value

    if (value2 === "" && value2==="00-00-000" || nameuser2 === "") {
      // Display an alert or take any other action (e.g., prevent form submission)
      alert("User name and date ai olungaga kudukavum - ippadiku Manoj");
    }else {

    const birthDateObject = new Date(value2);
  
    // Get the current date
    const currentDate = new Date();
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - birthDateObject;
  
    // Calculate the number of days
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    if (days>1830){

      var show = document.getElementById("innr")
    
      show.innerText=`Dear ${nameuser2} your succesfully lived ${days} Days  Play the Audio Button Above to See your Future`
      var show1 = document.getElementById("innr")
    
        if (show1!== "Enter Your Name and Birthday Date Above" ){
            exSet(true)
    }

    }else{

       show = document.getElementById("innr")
      show.innerText=`Piranthu ${days} Days Thaan Ahuthu Sinna podiyan bro Nee poi Sutti tv paru poo bro`
       show1 = document.getElementById("innr")
       exSet(false)
    
    } 
  }}
  return (
    <div>
      <div className="bg-1">
        <h1 className="h1t">Google Josiyam</h1>
        <h6 className="h6t">follow me in Linkedin www.linkedin.com/in/sivammanoj</h6>
        <FaLinkedin className="linkin" />
          <div className="bg-2">
            <input type="text" id="text1" placeholder="Enter Your Name" />
            <input type="date" id="text2"  />
            <button className="btn" onClick={()=>handleValue()}>CLick</button>
            { ex? isPlaying ? <FaRegCirclePause className="sound-icon" onClick={isPlaying?pauseSound:playSound}/> :<AiFillSound className="sound-icon" onClick={isPlaying?pauseSound:playSound}/> :""}
            <div className="outPut"><p className="output1" id="innr">Enter Your Name and Birthday Date Above</p></div>
            <footer className="foot">Created By &copy;Sivam Manoj</footer>
          </div>
         
      </div>
      
    </div>
  )
}

export default App
