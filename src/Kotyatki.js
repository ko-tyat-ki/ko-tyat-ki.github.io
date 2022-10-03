import SideInfo from './SideInfo';
import Footer from './Footer';

import logo from './koti-logo.svg';
import video from './576p.mp4';

import './Kotyatki.css';

function Kotyatki() {
  return (
    <div className="kotyatki">
      <header className="ko-header">
        <h1>Ko-Tyat-Ki Kollektiv.</h1>
      </header>
      <img 
        src={logo}
        className="logo" 
        alt="logo"></img>
      <video autoPlay muted loop playsinline>
        <source src={video} type="video/mp4"/>
      </video>
      <Footer></Footer>
      <SideInfo></SideInfo>
    </div>
  );
}

export default Kotyatki;
