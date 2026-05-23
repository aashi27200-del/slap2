import { useState, useEffect } from "react";
import herPhoto from "./assets/her-photo.png";

export default function App() {
  const [hearts, setHearts] = useState([]);
  const [slaps, setSlaps] = useState(0);
  const [message, setMessage] = useState("Tap Aashi 💖");

  useEffect(() => {
    const interval = setInterval(() => {
      createHeart();
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const createHeart = () => {
    const id = Date.now();
    const left = Math.random() * 100;

    setHearts(prev => [...prev,{id,left}]);

    setTimeout(() => {
      setHearts(prev => prev.filter(h=>h.id!==id));
    },4000);
  };

  const slapAashi = () => {
    setSlaps(prev=>prev+1);

    const msgs = [
      "Aashi says: Ouch 😭",
      "You slapped softly 💖",
      "Aashi fell for you 😳",
      "Love attack 💘",
      "Aashi is blushing 🌸",
      "Too much romance 💕",
      "She is falling for you 💞",
      "Aashi loves you ❤️",
    ];

    setMessage(msgs[Math.floor(Math.random()*msgs.length)]);
    createHeart();
  };

  return (
    <div style={{
      height:"100vh",
      overflow:"hidden",
      position:"relative",
      background:"linear-gradient(to bottom right,#ff9acb,#ff5ea8)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      color:"white"
    }}>

      {hearts.map((heart)=>(
        <div key={heart.id}
          style={{
            position:"absolute",
            left:`${heart.left}%`,
            bottom:"-20px",
            fontSize:"30px",
            animation:"float 4s linear forwards"
          }}>
          💖
        </div>
      ))}

      <style>{`
        @keyframes float{
          from{
            transform:translateY(0);
            opacity:1;
          }
          to{
            transform:translateY(-110vh);
            opacity:0;
          }
        }

        @keyframes fall{
          0%{transform:rotate(0deg);}
          25%{transform:rotate(-10deg);}
          50%{transform:rotate(10deg);}
          75%{transform:rotate(-10deg);}
          100%{transform:rotate(0deg);}
        }
      `}</style>

      <h1 style={{fontSize:"55px"}}>
        💖 Talking Aashi 💖
      </h1>

      <div
        onClick={slapAashi}
        style={{
          width:"280px",
          height:"280px",
          borderRadius:"50%",
          background:"white",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          cursor:"pointer",
          marginTop:"20px",
          animation:"fall 0.6s",
          boxShadow:"0 0 30px rgba(255,255,255,0.7)",
          overflow:"hidden"
        }}
      >
        <img
          src={herPhoto}
          alt="Aashi"
          style={{
            width:"100%",
            height:"100%",
            objectFit:"cover"
          }}
        />
      </div>

      <h2 style={{
        marginTop:"25px",
        fontSize:"32px",
        textAlign:"center"
      }}>
        {message}
      </h2>

      <p style={{fontSize:"28px"}}>
        Slaps: {slaps} 💥
      </p>

      <button
        onClick={()=>{
          setMessage("Aashi loves you forever 💖");
          createHeart();
        }}
        style={{
          marginTop:"20px",
          padding:"15px 35px",
          border:"none",
          borderRadius:"30px",
          background:"white",
          color:"#ff3f8e",
          fontSize:"22px",
          cursor:"pointer",
          fontWeight:"bold"
        }}
      >
        Send Love 💌
      </button>

      <audio autoPlay loop>
        <source
          src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=romantic-background-112234.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
}
