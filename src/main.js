import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import stores from './reduxs/stores/index.js'

import 'antd/dist/antd.css'

import Test from './test.jsx'
import App from './App.jsx'

ReactDom.render(
  <Provider store={stores}>
    <Test /> 
    <App /> 
  </Provider>,
  document.getElementById('root')
)


