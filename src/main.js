import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import stores from './reduxs/stores/index.js'

import 'antd/dist/antd.css'

import App from './App.jsx'

ReactDom.render(
  <Provider store={stores}>
    <App /> 
  </Provider>,
  document.getElementById('root')
)


