import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
        <div>
      <h1>Hi, I'm Kanika Patil</h1>
      <h3>Frontend Developer</h3>
      <p>I build modern and responsive websites using React.</p>

      <button>Download Resume</button>
      <button>Contact Me</button>
      </div>

      <img src={profile}alt="Kanika"className="profile-img"/>
    </section>
  );
}

export default Hero;