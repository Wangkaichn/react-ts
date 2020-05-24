import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import stores from './reduxs/stores'

import 'antd/dist/antd.css'

import App from './App'

ReactDom.render(
  <Provider store={stores}>
    <App /> 
  </Provider>,
  document.getElementById('root')
)


