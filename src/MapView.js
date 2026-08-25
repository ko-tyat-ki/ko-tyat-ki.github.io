import React from 'react'
import './MapView.css'

const paws = [
  { left: '50%', top: '86%', rotate: '8deg' },
  { left: '50.5%', top: '80%', rotate: '12deg' },
  { left: '51.5%', top: '74%', rotate: '8deg' },
  { left: '52%', top: '68%', rotate: '-4deg' },
  { left: '51.8%', top: '62%', rotate: '-14deg' },
  { left: '51%', top: '57%', rotate: '-24deg' },
  { left: '50%', top: '53%', rotate: '-34deg' },
]

const MapView = () => {
  return (
    <main className="event-map">
      <div className="event-map-frame">
        <img
          className="event-map-image"
          src={require('./event-map-mingling.png')}
          alt="Map showing the event location in Hackney Marshes"
        />
      </div>

      <img
        className="event-map-logo"
        src={`${process.env.PUBLIC_URL}/countdown-logo-clean.svg`}
        alt="Event location"
      />

      <div className="paw-route" aria-hidden="true">
        {paws.map((paw, index) => (
          <span
            key={index}
            className="paw-step"
            style={{
              left: paw.left,
              top: paw.top,
              '--paw-rotate': paw.rotate,
              '--paw-index': index,
            }}
          />
        ))}
      </div>

      <iframe
        className="map-player"
        title="B.D.B, BICEP, Benjamin Damage — CHROMA 005 A.L.O.E"
        src="https://bandcamp.com/EmbeddedPlayer/track=1533066334/size=small/bgcol=000000/linkcol=62d8ef/transparent=true/"
        allow="autoplay"
      />
    </main>
  )
}

export default MapView
