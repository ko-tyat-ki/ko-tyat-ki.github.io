import './Gallery.css';

function Gallery() {
  const links = [
    "https://www.youtube.com/embed/imKELSX2kw8",
    "https://www.youtube.com/embed/LQGKn2CyUkA",
    "https://www.youtube.com/embed/RnFjic4xLBY",
  ]
  return (
    <section className="ko-gallery">
      <div className="gallery">
      {
        links.map((link, key) => (
          <div className={`i${key+1} video-responsive`} key={`video-gallery-${key}`}>
            <iframe
              // width="853"
              // height="480"
              src={link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        ))
      }
      </div>
    </section>
  );
}

export default Gallery;
