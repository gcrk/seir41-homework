import React from "react"
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/word-class'>Word Generator - Class Based</NavLink>
                    </li>
                    <li>
                        <NavLink to='/word-function'> Word Generator - Function Based </NavLink> 
                    </li>
                    <li>
                        <NavLink to='/tic-tac-toe'> Tic Tac Toe </NavLink> 
                    </li>
                </ul>                
            </nav>
        </div>
    )
}
