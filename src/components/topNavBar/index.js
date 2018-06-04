import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };

  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render() {
    return (
      <div>



        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                  to="/about-us">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink activeStyle={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
                  to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                  to="/sidebar">Sidebar</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    );
  }
}



