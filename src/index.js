import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import reportWebVitals from './reportWebVitals.js'

export const action = window.location.pathname.split('/').filter(el => el !== '')[0] !== undefined ? window.location.pathname.split('/').filter(el => el !== '')[0] : null
export const subaction = window.location.pathname.split('/').filter(el => el !== '').filter(el => el !== action) !== undefined ? window.location.pathname.split('/').filter(el => el !== '').filter(el => el !== action).join('/') : null


const root = ReactDOM.createRoot(document.getElementById('nanomagic-content'))
setTimeout(r, 20)

function r() {
	root.render(<App />)
	setTimeout(r, 5000)
}


reportWebVitals()
