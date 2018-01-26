import React, { Component } from 'react';
// import logo from '../Images/logo.svg';
import jenna from '../Images/jenna.jpg';
import './Header.css';
import {
    Nav,
    Navbar,
    NavItem, 
    NavDropdown,
    MenuItem
} from 'react-bootstrap'

class HeaderNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#about">About</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#resume">
                            Resume
                        </NavItem>
                        <NavItem eventKey={2} href="#diploma">
                            Diploma
                        </NavItem>
                        <NavDropdown eventKey={3} title="Projects" id="project-nav-dropdown">
                            <MenuItem eventKey={3.1} href="#project1">Project1</MenuItem>
                            <MenuItem eventKey={3.2} href="#project2">Project2</MenuItem>
                            <MenuItem eventKey={3.3} href="#project3">Project3</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4} href="#github">GitHub</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={4} href="#linkedin">
                            Linked In
                        </NavItem>
                        <NavItem eventKey={5} href="#contact">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <header className="Header-main">
                    <table>
                        <tr>
                            <td>
                            {/* <img src={logo} className="Header-logo" alt="logo" /> */}
                                <img src={jenna} className="Header-logo" alt="jenna" />
                            </td>
                            <td><h1 className="Header-title">Jenna Kovacs</h1>
                                <div className="Header-subtitle">
                                    <p>University of Florida</p>
                                    <p>B.S. Computer Engineering</p>
                                    <p>c/o Fall 2017</p> 
                                </div>
                            </td>
                        </tr>
                    </table>
                </header>
                <HeaderNav />
            </div>
        );   
    }
}

export default Header;