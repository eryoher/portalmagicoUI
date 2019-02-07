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

import logoURL from '../../../img/logo-header.png';
import Divider from './divider';

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
    var iconTwitter ="../../../img/logo_twitter.png";
    var iconFacebook = "../../../img/logo_facebook.png";
    var iconYouTube = "../../../img/logo_youtube.png";

    return (
        <div className="row">
            <MediaQuery query="(min-device-width: 768px)">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex align-items-center text-right">
                    <div className="logo">
                        <img src={logoURL}/>
                    </div>
                    <div className="menu-margen">
                        <div className="d-flex menu-container">
                            <div className="menu ">
                                <Link to="/">
                                    Home
                                </Link>
                            </div>
                            <Divider />
                            <div className="menu">
                                <Link to="/nosotros" >
                                    Nosotros
                                </Link>
                            </div>
                            <Divider />
                            <div className="menu">Campañas</div>
                            <Divider />
                            <div className="menu">Proyectos</div>
                            <Divider />
                            <div className="menu">Aliados</div>
                            <Divider />
                            <div className="menu">Regala sonrisas</div>                        
                            <Divider />
                            <div className="menu">Contacto</div>                                                             
                        </div>                        
                    </div>
                    <MediaQuery query="(min-device-width: 972px)">
                        <div className="social-media">
                            <div className="icon " style={{backgroundImage: `url(${iconYouTube})`}} ></div>
                            <div className="icon " style={{backgroundImage: `url(${iconFacebook})`}} ></div>
                            <div className="icon " style={{backgroundImage: `url(${iconTwitter})`}} ></div>
                        </div>
                    </MediaQuery> 
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