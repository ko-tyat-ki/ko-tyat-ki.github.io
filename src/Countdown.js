import React, { useEffect, useState } from 'react'
import './Countdown.css'
import MapView from './MapView'

// One minute after midnight on 12 September in London.
// London is BST (+01:00) on this date.
const EVENT_TIME = new Date('2026-09-12T00:01:00+01:00')

const getLondonDate = () => {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(new Date())

  return {
    year: Number(parts.find(part => part.type === 'year').value),
    month: Number(parts.find(part => part.type === 'month').value),
    day: Number(parts.find(part => part.type === 'day').value),
  }
}

const getDaysLeft = () => {
  const londonToday = getLondonDate()

  const today = Date.UTC(
    londonToday.year,
    londonToday.month - 1,
    londonToday.day
  )

  const eventDay = Date.UTC(2026, 8, 12)

  return Math.ceil(
    (eventDay - today) / (1000 * 60 * 60 * 24)
  )
}

const LoadingText = ({ text }) => {
  const letterCount = text.replace(/\s/g, '').length
  const [activeLetters, setActiveLetters] = useState(() => new Set([0]))

  useEffect(() => {
    const interval = setInterval(() => {
      const litCount = Math.min(
        letterCount,
        1 + Math.floor(Math.random() * 3)
      )
      const nextLetters = new Set()

      while (nextLetters.size < litCount) {
        nextLetters.add(Math.floor(Math.random() * letterCount))
      }

      setActiveLetters(nextLetters)
    }, 140)

    return () => clearInterval(interval)
  }, [letterCount])

  let letterIndex = -1

  return (
    <div className="loading-text" aria-label={text}>
      {text.split('').map((char, index) => {
        if (char !== ' ') letterIndex += 1

        const isActive = char !== ' ' && activeLetters.has(letterIndex)

        return (
          <span
            key={index}
            className={`loading-letter${isActive ? ' is-active' : ''}`}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
    </div>
  )
}

const Countdown = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const eventHasStarted = now >= EVENT_TIME

  if (eventHasStarted) {
    return <MapView />
  }

  const daysLeft = getDaysLeft()

  return (
    <main className="countdown">
      <div className="countdown-content">
        <div
          className="countdown-logo"
          role="img"
          aria-label="Event logo"
        />
        <LoadingText
          text={`${daysLeft} ${daysLeft === 1 ? 'day' : 'days'} till`}
        />
        <iframe
          className="countdown-player"
          title="Benga & Coki — Night (Neekeetone Jungle Rework)"
          src="https://bandcamp.com/EmbeddedPlayer/track=2172554381/size=small/bgcol=000000/linkcol=62d8ef/transparent=true/"
          allow="autoplay"
        />
      </div>
    </main>
  )
}

export default Countdown
