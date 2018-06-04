import React, { Component } from 'react';

import SideNav, {NavIcon, NavText } from 'react-sidenav';

import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'font-awesome/css/font-awesome.css';
import 'fullcalendar/dist/fullcalendar.css';

import 'fullcalendar/dist/fullcalendar.js';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class App extends Component {

    constructor() {
        super();


        this.state = {
            value1: 5,
            value2: 10,
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFullScreen: false,
            isOpen: false
        };



    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                  </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>

                
            </div>



        );
    }
}

export default App;
