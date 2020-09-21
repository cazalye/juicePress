import React, { Component } from 'react';
import "./footer.scss";
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';


class FooterDetail extends Component{
    render() {
        return (
            <Footer size="mega" className="footer">
            <FooterSection type="bottom" className="upper-section">
                <FooterDropDownSection title="Shop Juices">
                    <FooterLinkList>
                        <a href="https://brandsonparade.com/product/tasmanian-juice-press-subscription" rel="noopener noreferrer" target="_blank">Juice Subscription</a>
                        <a href="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-weekly-juice-special-750ml/" rel="noopener noreferrer" target="_blank">Weekly Special</a>
                        <a href="https://brandsonparade.com/product-category/juice-pack/" rel="noopener noreferrer" target="_blank">Juice Packs</a>
                        <a href="https://brandsonparade.com/product-category/the-tasmanian-juice-press/immune-boost/" rel="noopener noreferrer" target="_blank">Immune Boost Packs</a>
                        <a href="https://brandsonparade.com/product-category/the-tasmanian-juice-press/750ml-juice-bottles/" rel="noopener noreferrer" target="_blank">750ml Juice Blends</a>
                        <a href="https://brandsonparade.com/product-category/the-tasmanian-juice-press/2l-juice-bottles/" rel="noopener noreferrer" target="_blank">2L Juice Blends</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="About Us">
                    <FooterLinkList>
                        <a href="/#about">Who Are We</a>
                        <a href="/#enviro">Environmental Impact</a>
                        <a href="/#visitUs">Visit Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Contact Us">
                    <FooterLinkList>
                        <a href="tel:0438406680" target="_blank">Phone: 0438406680</a>
                        <a href="mailto:james@brandsonparade.com" target="_blank">Email: james@brandsonparade.com</a>
                        <a href="https://www.facebook.com/tasmanianjuicepress/" target="_blank">Facebook: Tasmanian Juice Press</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom">
                <FooterLinkList className="footer-links">
                        <a href="mailto:james@brandsonparade.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-envelope" aria-hidden="true" />
                        </a>
                        <a href="tel:0438406680" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-phone" aria-hidden="true" />
                        </a>
                        <a href="https://www.facebook.com/tasmanianjuicepress/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href="https://www.instagram.com/tasmanianjuicepress/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                </FooterLinkList>
                <div className="copyright">
                        <p> &copy; 2020 Tasmanian Juice Press. <br/>Designed by <a href="https://portfolio.cazalye.com"  rel="noopener noreferrer" target="_blank"> cazalye</a></p>
                </div>
            </FooterSection>
        </Footer>
         )
    }
}

export default FooterDetail;
