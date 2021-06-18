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
                <div className="promo-banner">            
                    <p className="promo-text"><img className="" alt="dark mofo" src="./img/darkmofo.jfif"  width="40px"/><strong>DARK MOFO winter feast</strong>: stall 8 inside the shed  </p>
                </div>
                <Header title={<Link to="/#home" className="header-title">The Tasmanian Juice Press </Link>}>
                <Link to="/#home"><img className="logo" alt="logo" src="./img/logoTransparent.png"  width="40px"/></Link>
                    <Navigation className="header-nav">
                        {/* <Link to="/#range">Juice Range</Link>  */}
                        <Link className="shop-link" to="/#shop">Shop</Link>
                        <Link className="nav-link" to="/#range">Juice Range</Link>
                        <Link className="nav-link" to="/#visitUs">Markets</Link>
                        <Link className="nav-link" to="/#cafes">Find our Juice</Link>
                        <Link className="nav-link" to="/#about">About</Link> 
                        {/* <Link className="nav-link" to="/#enviro">Environmental Impact</Link>  */}
                        <Link className="nav-link" to="/#contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">The Tasmanian Juice Press </Link> as any}>
                    <Navigation className="drawer-nav" >
                        <Link className="drawer-logo" onClick={() => this.hideToggle()} to="/#home"><img className="logo" alt="logo" src="./img/logoTransparentDark.png"  width="40px"/></Link>
                        {/* <Link className="drawer-title" onClick={() => this.hideToggle()} to="/">Home</Link> */}
                        <Link onClick={() => this.hideToggle()} to="/#home">Home</Link>
                        <Link onClick={() => this.hideToggle()} to="/#shop">Shop</Link>
                        <Link onClick={() => this.hideToggle()} to="/#range">Juice Range</Link>
                        <Link onClick={() => this.hideToggle()} to="/#visitUs">Markets</Link>
                        <Link onClick={() => this.hideToggle()} to="/#cafes">Find our Juice</Link>
                        <Link onClick={() => this.hideToggle()} to="/#enviro">Environmental Impact</Link>
                        <Link onClick={() => this.hideToggle()} to="/#about">About</Link>
                        <Link onClick={() => this.hideToggle()} to="/#contact">Contact</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        );
    }
}

export default Navbar;