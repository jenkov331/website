import React, { Component } from 'react';
// import logo from '../Images/logo.svg';
import jenna from '../Images/jenna.jpg';
import './Header.css';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <HeaderMain />
                <HeaderNavBar />
            </div>
        );   
    }
}

const HeaderMain = () => (
    <header className="Header-main">
        <table>
            <tbody>
            <tr>
                <td>
                {/* <img src={logo} className="Header-logo" alt="logo" /> */}
                    <img src={jenna} className="Header-logo" alt="jenna" />
                </td>
                <td><h1 className="Header-title">Jenna Kovacs</h1>
                    <div className="Header-subtitle">
                        <p>University of Florida</p>
                        <p>B.S. Computer Engineering</p>
                        <p>Class of Fall 2017</p> 
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </header>
);

const HeaderNavBar = () => (
    <Navbar collapseOnSelect>
        <LinkContainer to="/about">
            <Navbar.Header>
                <Navbar.Brand>About</Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
        </LinkContainer>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/resume">
                    <NavItem>Resume</NavItem> 
                </LinkContainer>
                <LinkContainer to="/diploma">
                    <NavItem>Diploma</NavItem>
                </LinkContainer>
                <NavDropdown title="Projects" id="project-nav-dropdown">
                    <LinkContainer to="/projects/project1">
                        <MenuItem>Project1</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/projects/project2">
                        <MenuItem>Project2</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/projects/project3">
                        <MenuItem>Project3</MenuItem>
                    </LinkContainer>
                    <MenuItem divider />
                    <LinkContainer to="/projects/github">
                        <MenuItem>GitHub</MenuItem>
                    </LinkContainer>
                </NavDropdown>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/linkedin">
                    <NavItem>Linked In</NavItem>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <NavItem>Contact</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>  
);

export default Header;