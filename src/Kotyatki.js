import Header from './Header'
import Logo from './Logo'
import Video from './Video'
import Divider from './Divider'
import Gallery from './Gallery'
import About from './About'
import Team from './Team'
import Footer from './Footer'
import Yokai from './Yokai'
import Countdown from './Countdown'

import './Kotyatki.css'

function Kotyatki() {
  const hash = window.location.hash

  if (hash === "#kinkiyokai") {
    return <Yokai/>
  }

  if (hash === "#sbwlfrs-cntdwn") {
    return <Countdown/>
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
  )
}

export default Kotyatki
