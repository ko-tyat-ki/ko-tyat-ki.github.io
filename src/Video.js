import { useState, useEffect } from 'react'

import video_mp4 from './576p.mp4'
import video_webm from './576p.webm'
import poster from './screen.png'

import './Video.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function Video() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="ko-video">
      {windowDimensions > '800px' ? (
        <video autoPlay muted loop autobuffer="true" playsInline poster={poster}>
          <source src={video_webm} type="video/webm"/>
          <source src={video_mp4} type="video/mp4"/>
        </video>
      ) : (
        <div dangerouslySetInnerHTML={{
          __html:
          <video controls loop auto-buffer playsInline poster={poster}>
            <source src={video_webm} type="video/webm"/>
            <source src={video_mp4} type="video/mp4"/>
          </video>
        }} />
      )}
      
    </section>
  )
}

export default Video
