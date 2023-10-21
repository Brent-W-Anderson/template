import HomePage from './pages/HomePage'
import React from 'react'
import style from './App.module.scss'

// TODO: SETUP PAGES/ REACT-ROUTER/ AND LAZY LOADING COMPONENTS
// TODO: SETUP README
export default function App(): React.JSX.Element {
    return <div className={style.app}>
        <HomePage />
    </div>
}
