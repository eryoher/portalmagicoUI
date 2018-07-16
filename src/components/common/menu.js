import React from 'react';
import { Link } from 'react-router'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


import MediaQuery from 'react-responsive';

import logoURL from '../../../img/logo_header.png';

export default class Example extends React.Component {
  
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      collapsed : true,
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
    var iconInstagram ="../../../img/instagram_icon_white.png";
    var iconFacebook = "../../../img/facebook_icon.png";
    var iconSearch = "../../../img/search_icon_white_md.png";

    return (
        <div className="row">
            <MediaQuery query="(min-device-width: 768px)">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center text-right">
                    <div className="logo">
                        <img src={logoURL}/>
                    </div>
                    <div className="d-flex justify-content-end w-100">
                        <Link to="/" >
                            <div className="menu ">HOME</div>
                        </Link>
                        <Link to="/nosotros" >
                            <div className="menu">NOSOTROS</div>
                        </Link>
                        <div className="menu">SENSACIONES</div>
                        <div className="menu">DISTRIBUIDORES</div>
                        <div className="menu">ACTUALIDAD</div>
                        <div className="menu">CONTACTO</div>                        
                        <MediaQuery query="(min-device-width: 972px)">
                            <div className="social-media">
                                <div className="icon " style={{backgroundImage: `url(${iconFacebook})`}} ></div>
                                <div className="icon " style={{backgroundImage: `url(${iconInstagram})`}} ></div>
                                <div className="icon " style={{backgroundImage: `url(${iconSearch})`}} ></div>
                            </div>
                        </MediaQuery>
                    </div>
                    
                
                </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 767px)">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <Navbar color="faded" light >
                        <NavbarBrand> 
                            <img src={logoURL} className="logo-header" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                               <NavItem>
                                    <NavLink href="/" className="menu" >HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/nosotros" className="menu" >NOSOTROS</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="" className="menu" >SENSACIONES</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="" className="menu" >DISTRIBUIDORES</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="" className="menu" >ACTUALIDAD</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="" className="menu" >CONTACTO</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>           
            </MediaQuery>
      </div>
    );
  }
}