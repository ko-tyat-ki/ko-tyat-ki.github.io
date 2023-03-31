import './YokaiAbout.css';

function YokaiAbout() {
  const link = "https://www.youtube.com/embed/j1-hFnRSwws"

  return (
    <>
    <section className="yo-about">
      <div className="about">
        <h3>An oasis of audio visual tactile pleasure.
          A place to explore the playful connection and curiosity through tension and touch.
          A tactile multi-sensory interactive sculpture. Gigantic Yokai hidden deep in the playa.</h3>
        </div>
    </section>
    <section>
        <div className="video-yokai">
          <iframe
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" />
        </div>
    </section>
    <section className="yo-about">
      <div className="about">
        <p>The Kinky Yokai is a multi-dimensional portal inviting participants to explore
          self-discovery, honesty, and creativity through its multi-sensory features. This tactile,
          interactive sculpture lets attendees delve into the relationship between confinement and
          curiosity through tension and touch. We aim to create an immersive experience, allowing
          individuals to shed societal labels and embrace their true selves in a safe environment.
          The Kinky Yokai is a sanctuary for curiosity and self-expression. Engage with its enigmatic
          allure and connect with fellow explorers. Experience shared play with a visual musical instrument,
          creating a kinesthetic symphony and connecting with the environment through interactive sandplay
          and visuals.
          Pull it, play it, enjoy it, and become one with the Kinky Yokai. Let this mystical
          creation anchor you in the present moment, savouring the surreal atmosphere crafted to blur
          the lines between realities.
        </p>
      </div>
    </section>
    </>
  );
}

export default YokaiAbout;
