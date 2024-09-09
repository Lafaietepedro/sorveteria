import React from 'react'
import './style.css'


export default function Header() {
    return (
        <header>
            <div className='headerBox limitar-secao'>
                <img src='../assets/logo.png'></img>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/sabores'>Sabores</a>
                    <a href='/sobre'>Sobre</a>
                </nav>
            </div>
        </header>
    )
}