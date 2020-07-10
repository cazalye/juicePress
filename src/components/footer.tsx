import React, { Component } from 'react';
import "./footer.scss";
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';


class FooterDetail extends Component{
    render() {
        return (
            <Footer size="mega" className="footer">
            <FooterSection type="bottom">
                <FooterDropDownSection title="Shop Juices">
                    <FooterLinkList>
                        <a href="#">750ml Juice Blends</a>
                        <a href="#">2L Juice Blends</a>
                        <a href="#">Weekly Special</a>
                        <a href="#">Immune Boost Packs</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="About Us">
                    <FooterLinkList>
                        <a href="#">Who Are We</a>
                        <a href="#">Environmental Impact</a>
                        <a href="#">Visit Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Contact Us">
                    <FooterLinkList>
                        <a href="tel:0438406680" target="_blank">Phone: 0438 406680</a>
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
            </FooterSection>
        </Footer>
         )
    }
}

export default FooterDetail;
