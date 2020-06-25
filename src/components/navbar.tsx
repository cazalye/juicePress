import React, { Component } from 'react';
import "./navbar.scss";
import {Layout, Header, Navigation, Drawer} from 'react-mdl';
import {Link} from 'react-router-dom';

class Navbar extends Component<any, any>{
    hideToggle() {
        const selectorId = document.querySelector('.mdl-layout') as any;
        if (selectorId) {
            selectorId.MaterialLayout.toggleDrawer();
        }
    }
    render() {
        return (
            <Layout>
                <Header transparent={true} title={<Link to="/" className="header-title">The Tasmanian Juice Press</Link>}>
                    <Navigation className="header-nav">
                        {/* <a href="#about">About</a>  */}
                        {/* <Link to="">Sustainability</Link>
                        <Link to="">Visit Us</Link>
                        <Link to="">Shop</Link>
                        <Link to="">Contact</Link> */}
                    </Navigation>
                </Header>
                    <Drawer title={<Link onClick={() => this.hideToggle()} to="/" className="header-title">The Tasmanian Juice Press</Link> as any}>
                        <Navigation className="drawer-nav" >
                            {/* <Link onClick={() => this.hideToggle()} to="#about">About</Link>  */}
                            {/* <Link onClick={() => this.hideToggle()} to="">Sustainability</Link>
                            <Link onClick={() => this.hideToggle()} to="">Visit Us</Link>
                            <Link onClick={() => this.hideToggle()} to="">Shop</Link>
                            <Link onClick={() => this.hideToggle()}to="">Contact</Link> */}
                        </Navigation>
                    </Drawer>
            </Layout>
        );
    }
}
export default Navbar;
