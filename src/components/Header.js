import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './style.css';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#e91e63'}
    const container = {height: 1300}
    return(
      <div className="header">
        <Router>
          <header>
            <MDBNavbar  dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong className="logo">NG@23 <i className="fab fa-wpexplorer"></i></strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <Nav.Link style={{fontSize:'30px'}} href="/">Home</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                      <Nav.Link style={{fontSize:'30px'}} href="/About">About Me</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                      <Nav.Link style={{fontSize:'30px'}} href="/Services">Services</Nav.Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <button className="btn1" href="/Joinme">JOIN ME</button>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink style={{fontSize:'30px'}} to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{fontSize:'30px'}} to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{fontSize:'30px'}} to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default Header;