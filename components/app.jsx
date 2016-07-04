import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Leads from './leads'

let reactElement = document.getElementById('react')
render(
  <Provider store={store}>
    <Leads />
  </Provider>,
  reactElement
)
