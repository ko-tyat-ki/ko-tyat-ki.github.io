import SideInfo from './SideInfo';
import Video from './Video';
import Footer from './Footer';

import './Kotyatki.css';

function Kotyatki() {
  return (
    <div className="kotyatki">
      <header className="ko-header">
        <h1>Ko-Tyat-Ki Kollektiv.</h1>
      </header>
      <div className="logo"></div>
      <Video></Video>
      <Footer></Footer>
      <SideInfo></SideInfo>
    </div>
  );
}

export default Kotyatki;
