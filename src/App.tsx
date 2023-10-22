import React from 'react'

import style from './assets/scss/globals/globals.module.scss'
import HomePage from './pages/HomePage/HomePage'

// TODO: ADD -> REACT-ROUTER & LAZY LOADING WITH SUSPENSE
const App = (): React.JSX.Element => {
    return (
        <div className={style.app}>
            <HomePage />
        </div>
    )
}

export default App
