import "./navbar.scss";
import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
// import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component<any, any> {
    hideToggle() {
        const selectorId = document.querySelector('.mdl-layout') as any;
        if (selectorId) {
            selectorId.MaterialLayout.toggleDrawer();
        }
    }
    render() {
        const title = <Link to="/#home" className="header-title"> The Tasmanian Juice Press </Link> as any;
        return (
            <Layout>
                <Header title={<Link to="/#home" className="header-title">The Tasmanian Juice Press </Link>}>
                <Link to="/#home"><img className="logo" src="./img/logoTransparent.png"  width="40px"/></Link>
                    <Navigation className="header-nav">
                        <Link to="/#range">Juice Range</Link> 
                        <Link to="/#about">About</Link> 
                        <Link to="/#visitUs">Visit Us</Link>
                        <Link to="/#contact">Contact</Link>
                        <Link to="/#shop">Shop</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">The Tasmanian Juice Press </Link> as any}>
                    <Navigation className="drawer-nav" >
                        <Link onClick={() => this.hideToggle()} to="/">About</Link>
                        <Link onClick={() => this.hideToggle()} to="/">Visit Us</Link>
                        <Link onClick={() => this.hideToggle()} to="/">Contact</Link>
                        <Link onClick={() => this.hideToggle()} to="/">Shop</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;