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
        // const title = <Link to="/#home" className="header-title"> The Tasmanian Juice Press </Link> as any;
        return (
            <Layout>
                <Header title={<Link to="/#home" className="header-title">The Tasmanian Juice Press </Link>}>
                <Link to="/#home"><img className="logo" src="./img/logoTransparent.png"  width="40px"/></Link>
                    <Navigation className="header-nav">
                        {/* <Link to="/#range">Juice Range</Link>  */}
                        <Link className="nav-link" to="/#about">About Us</Link> 
                        <Link className="nav-link" to="/#enviro">Environmental Impact</Link> 
                        <Link className="nav-link" to="/#visitUs">Visit Us</Link>
                        <Link className="nav-link" to="/#contact">Contact</Link>
                        <Link className="shop-link" to="/#shop">Shop</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">The Tasmanian Juice Press </Link> as any}>
                    <Navigation className="drawer-nav" >
                        {/* <Link onClick={() => this.hideToggle()} to="/#range">Juice Range</Link> */}
                        <Link className="drawer-logo" to="/#home"><img className="logo" src="./img/logoTransparent.png"  width="40px"/></Link>
                        <Link className="drawer-title" onClick={() => this.hideToggle()} to="/">The Tasmanian Juice Press</Link>
                        <Link onClick={() => this.hideToggle()} to="/#about">About Us</Link>
                        <Link onClick={() => this.hideToggle()} to="/#visitUs">Visit Us</Link>
                        <Link onClick={() => this.hideToggle()} to="/#enviro">Environmental Impact</Link>
                        <Link onClick={() => this.hideToggle()} to="/#contact">Contact</Link>
                        <Link onClick={() => this.hideToggle()} to="/#shop">Shop</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;