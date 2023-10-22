import React from 'react'

import { HamburgerIcon } from '../../assets/svgs'

import style from './HomePage.module.scss'

const HomePage = (): React.JSX.Element => {
    return (
        <>
            <h1 className={style.title}> Build Home Page here.. </h1>
            <HamburgerIcon />
        </>
    )
}

export default HomePage
