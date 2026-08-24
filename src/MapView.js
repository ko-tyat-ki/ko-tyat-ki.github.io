import React from 'react'
import './MapView.css'

const paws = [
  { left: '49.4%', top: '81.5%', rotate: '8deg' },
  { left: '50.2%', top: '75.8%', rotate: '12deg' },
  { left: '51.6%', top: '69.6%', rotate: '8deg' },
  { left: '52.4%', top: '63.2%', rotate: '-4deg' },
  { left: '52.1%', top: '57.1%', rotate: '-14deg' },
  { left: '51.1%', top: '52.2%', rotate: '-24deg' },
  { left: '49.8%', top: '48.1%', rotate: '-34deg' },
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

        <div
          className="event-map-logo"
          role="img"
          aria-label="Event location"
        />

        <div className="paw-route" aria-hidden="true">
          {paws.map((paw, index) => (
            <span
              key={index}
              className="paw-step"
              style={{
                left: paw.left,
                top: paw.top,
                rotate: paw.rotate,
                '--paw-index': index,
              }}
            >
              🐾
            </span>
          ))}
        </div>
      </div>

      <iframe
        className="map-player"
        title="Benga & Coki — Night (Neekeetone Jungle Rework)"
        src="https://bandcamp.com/EmbeddedPlayer/track=2172554381/size=small/bgcol=000000/linkcol=62d8ef/transparent=true/"
        allow="autoplay"
      />
    </main>
  )
}

export default MapView
