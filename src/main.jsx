import React from "react"
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import './index.css'
import store from "./store/Index.jsx"
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  // connecting your react app with redux store so that states can be accessed from store in you app
  <Provider store = {store}>
    <App />
  </Provider>,
)
