
import React, { useState, useEffect } from 'react'
import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'
import '../header/header.scss'
import { RiMenu3Line } from "react-icons/ri";
import { FiX } from "react-icons/fi";


export const Header = () => {
    const [data, setData] = useState(false)

    useEffect (() => {
        if (data) {
            document.body.style.owerflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    })

    return (
        <div className="wrap">
            <div className="navbar">
                <div className="nav">
                    <div className='logo'>
                        <NavLink><img src={logo} alt="" /></NavLink>
                    </div>
                    <div className="our">
                        <NavLink to='/about'> О нас </NavLink>
                        <NavLink to='/proek'>Проект</NavLink>
                        <NavLink to='/materials'>Материалы</NavLink>
                        <NavLink to='/reviews'>Отзывы</NavLink>
                    </div>
                    <div className="number">
                        <h3>+7 999 99 99 99</h3>
                    </div>
                    <div className="menu">
                        <RiMenu3Line size={20} onClick={() => {
                            setData(!data)
                        }} />
                        {
                            data && (
                                <div className="modals"
                                    onClick={() => setData(!data)}
                                >
                                    <div className="modal">
                                        <div className="aroun">
                                            <div className="logos">
                                                <NavLink><img src={logo} alt="" /></NavLink>
                                            </div>
                                            <div>
                                                <FiX size={40} onClick={() => setData(!data)} />
                                            </div>
                                        </div>
                                        <div className="router">
                                            <NavLink to='/about'> О нас </NavLink>
                                            <NavLink to='/proek'>Проект</NavLink>
                                            <NavLink to='/materials'>Материалы</NavLink>
                                            <NavLink to='/reviews'>Отзывы</NavLink>
                                            <NavLink>+7 999 99 99 99</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header