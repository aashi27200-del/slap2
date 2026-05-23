import { useState, useEffect } from "react";
import herPhoto from "./assets/her-photo.png";

export default function App() {
  const [hearts, setHearts] = useState([]);
  const [slaps, setSlaps] = useState(0);
  const [message, setMessage] = useState("Slap the Cat Aashi 💖");

  useEffect(() => {
    const interval = setInterval(() => {
      createHeart();
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const createHeart = () => {
    const id = Date.now();
    const left = Math.random() * 100;

    setHearts((prev) => [
      ...prev,
      { id, left },
    ]);

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((h) => h.id !== id)
      );
    }, 4000);
  };

  const slapAashi = () => {
    setSlaps((prev) => prev + 1);

    const msgs = [
      "Aashi says: Ouch 😭",
      "Cat Aashi got slapped 💥",
      "She is falling for you 😳",
      "Too much romance 💕",
      "Aashi is blushing 🌸",
      "Love attack 💘",
      "Cat Aashi is dizzy 😵",
      "Aashi loves you ❤️",
    ];

    setMessage(
      msgs[Math.floor(Math.random() * msgs.length)]
    );

    createHeart();
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background:
          "linear-gradient(to bottom right,#ff9acb,#ff5ea8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            position: "absolute",
            left: `${heart.left}%`,
            bottom: "-20px",
            fontSize: "30px",
            animation: "float 4s linear forwards",
          }}
        >
          💖
        </div>
      ))}

      <style>{`
        @keyframes float {
          from {
            transform: translateY(0);
            opacity: 1;
          }

          to {
            transform: translateY(-110vh);
            opacity: 0;
          }
        }

        @keyframes shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes fall {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      <h1
        style={{
          fontSize: "52px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        💖 Cat Aashi Slap Game 💖
      </h1>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {message}
      </h2>

      <div
        onClick={slapAashi}
        style={{
          width: "320px",
          height: "320px",
          position: "relative",
          cursor: "pointer",
          animation: "fall 0.6s",
        }}
      >
        {/* Cat */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/1864/1864514.png"
          alt="cat"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter:
              "drop-shadow(0 0 20px white)",
          }}
        />

        {/* Her Face */}
        <img
          src={herPhoto}
          alt="Aashi"
          style={{
            position: "absolute",
            top: "70px",
            left: "95px",
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "5px solid white",
          }}
        />

        {/* Slap Effect */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "20px",
            fontSize: "50px",
            animation:
              "shake 0.4s infinite",
          }}
        >
          💥
        </div>
      </div>

      <p
        style={{
          fontSize: "30px",
          marginTop: "25px",
        }}
      >
        Slaps: {slaps} 💥
      </p>

      <button
        onClick={() => {
          setMessage(
            "Aashi loves you forever 💖"
          );
          createHeart();
        }}
        style={{
          marginTop: "20px",
          padding: "15px 35px",
          border: "none",
          borderRadius: "30px",
          background: "white",
          color: "#ff3f8e",
          fontSize: "22px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow:
            "0 0 20px rgba(255,255,255,0.6)",
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
