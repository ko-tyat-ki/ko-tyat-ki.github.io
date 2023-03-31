import Header from './Header';
import Logo from './Logo';
import Video from './Video';
import Divider from './Divider';
import Gallery from './Gallery';
import About from './About';
import Team from './Team';
import Footer from './Footer';
import Yokai from './Yokai';

import './Kotyatki.css';

function Kotyatki() {
  const path = window.location.pathname;

  if (path === "/kinkiyokai") {
    return <Yokai/>
  }

  return (
    <>
        <Header/>
        <Logo/>
        <Video/>
        <Divider/>
        <Gallery/>
        <About/>
        <Team/>
        <Footer/>
    </>
  );
}

export default Kotyatki;
