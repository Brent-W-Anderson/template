import HomePage from './pages/HomePage/HomePage'
import React from 'react'
import style from './assets/scss/globals/globals.module.scss'

// TODO: REACT-ROUTER/ LAZY LOADING COMPONENTS/ README
// TODO: FORMAT TO THE NEXT LINE AUTOMATICALLY ON SAVE (PRETTIER?)
const App = (): React.JSX.Element => {
    return <div className={ style.app }>
        <HomePage />
    </div>
}

export default App