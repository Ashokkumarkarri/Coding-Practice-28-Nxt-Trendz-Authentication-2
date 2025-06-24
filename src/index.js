import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Coding-Practice-28-Nxt-Trendz-Authentication-2">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
