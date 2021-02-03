import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore'
import axios from 'axios'

axios.defaults.baseURL = "https://content.viaplay.se/"

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)