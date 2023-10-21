import HomePage from './pages/HomePage'
import React from 'react'
import classnames from 'classnames'
import style from './assets/scss/globals.module.scss'

// TODO: REACT-ROUTER/ LAZY LOADING COMPONENTS/ README
export default function App(): React.JSX.Element {
    return <div className={classnames( style.app, style[ 'themed-border' ] )}>
        <HomePage />
    </div>
}
