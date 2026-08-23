import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Kotyatki from './Kotyatki'
import reportWebVitals from './reportWebVitals'

// Remove all query parameters from the URL
// to avoid e.g. tracking parameters added by Instagram/Facebook/etc.
const cleanUrl = window.location.pathname + window.location.hash
window.history.replaceState({}, '', cleanUrl)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Kotyatki/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
