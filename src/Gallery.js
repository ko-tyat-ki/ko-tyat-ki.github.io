import gal1 from './gal-1.png'
import gal2 from './gal-2.png'
import gal3 from './gal-3.png'

import './Gallery.css';

function Gallery() {
  return (
    <section className="ko-gallery">
      <div className="gallery">
        <img className="i1" src={gal1}/>
        <img className="i2" src={gal2}/>
        <img className="i3" src={gal3}/>
      </div>
    </section>
  );
}

export default Gallery;
