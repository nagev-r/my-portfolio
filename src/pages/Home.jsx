import "./Home.css";
import SocialButtons from "../components/SocialButtons.jsx";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Hello...
            <br />
            <span className="glitch" data-text="Nageline">
              I'm Nageline Vallon-Rodriguez
            </span>
          </h1>
          <p className="hero-subtitle">
            A Software Developer and UI/UX Designer
          </p>
          <p className="hero-description">
            I create beautiful and functional web applications that provide a
            great user experience.
          </p>
          <a href="/resume.pdf" download className="download-btn">
            Download Resume
          </a>
          <SocialButtons />
        </div>
      </section>

      {/* Spacer to test scroll */}
      <div className="scroll-spacer"></div>
    </>
  );
}

export default Home;
