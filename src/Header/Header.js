import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="Header-main">
                <table>
                    <tr>
                        <td><img src={logo} className="Header-logo" alt="logo" /></td>
                        <td><h1 className="Header-title">Jenna Kovacs</h1>
                            <div className="Header-subtitle">
                                <p>B.S. Computer Engineering</p>
                                <p>c/o Fall 2017</p> 
                            </div>
                        </td>
                    </tr>
                </table>
            </header>
        );   
    }
}

export default Header;