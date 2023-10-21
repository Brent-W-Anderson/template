import HomePage from './pages/HomePage'
import React from 'react'
import classnames from 'classnames'
import style from './assets/scss/globals.module.scss'

// TODO: REACT-ROUTER/ LAZY LOADING COMPONENTS/ README
// TODO: FORMAT TO THE NEXT LINE AUTOMATICALLY ON SAVE (PRETTIER?)
const App = (): React.JSX.Element => {
    return <div className={classnames( style.app, style[ 'themed-border' ] )}>
        <HomePage />
    </div>
}

export default App