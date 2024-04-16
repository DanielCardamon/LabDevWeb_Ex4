    import React from 'react'
    import logo from '../assets/FATEC_ZONA_LESTE.png'
    import './Header.css'
    const header = () => {
    return (
        <header>
            <img src={logo} className='logo' alt="logo"/>
            <h1>Exercício 2 - React</h1>
        </header>
    )
    }

    export default header