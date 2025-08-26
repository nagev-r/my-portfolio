import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Hello...
            <br/>
            <span className="glitch" data-text="Nageline">
              I'm Nageline Vallon-Rodriguez
            </span>
          </h1>
          <p className="hero-subtitle">A Software Developer and UI/UX Designer</p>
          <p className="hero-description">
            I create beautiful and functional web applications that provide a
            great user experience.
          </p>

          {/* <div className="hero-buttons">
          <Button href="/resume.pdf" text="Download Resume" />
          <Button href="https://linkedin.com/in/yourprofile" text="LinkedIn" />
          <Button href="https://github.com/yourusername" text="GitHub" />
        </div> */}
        </div>
      </section>

      {/* Spacer to test scroll */}
      <div className="scroll-spacer"></div>
    </>
  );
}

export default Home;
