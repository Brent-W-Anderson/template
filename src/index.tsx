import './assets/scss/index.scss'
import App from './App'
import React from 'react'
import { createRoot } from 'react-dom/client'

const container = document.getElementById( 'root' )
const root = createRoot( container as Element )

root.render( <App /> )
