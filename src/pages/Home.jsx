import React from "react";
import "../App.css"; 



export default function Home() {
  return (
    <div className="home-container">
      <div className="hero" id="home">
        <video src="src/assets/elva.mp4" autoPlay muted playsInline style={{height:"200px",borderRadius:'10px',margin:'15px'}}></video>
        <h1 className="hero-title">Transforming Ideas into Digital Reality</h1>
        <p className="hero-subtitle"> At Elva, we specialize in transforming your ideas into cutting-edge digital solutions. 
  Our team of experts delivers innovative software, mobile, and web applications that help businesses grow.</p>
      </div>
   
    </div>
  );
}
