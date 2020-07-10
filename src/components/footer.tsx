import React, { Component } from 'react';
import "./footer.scss";
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';


class FooterDetail extends Component{
    render() {
        return (
            // <div id="footer">
            //     <div className="contact">
            //         <h3>Contact Us</h3>
            //         <ul className="contact">
            //             <li>Phone: xxxx</li>
            //             <li>Email: xxxx</li>
            //         </ul>
            //     </div>
            //     <div className="shop-now">
            //         <h3>Shop Now</h3>
            //         </div>
            //     <div className="footer-links">
            //         <a href="james@brandsonparade.com" rel="noopener noreferrer" target="_blank">
            //             <i className="fa fa-envelope" aria-hidden="true" />
            //         </a>
            //         <a href="tel:0438406680" rel="noopener noreferrer" target="_blank">
            //             <i className="fa fa-phone" aria-hidden="true" />
            //         </a>
            //         <a href="https://www.facebook.com/tasmanianjuicepress/" rel="noopener noreferrer" target="_blank">
            //             <i className="fa fa-facebook" aria-hidden="true" />
            //         </a>
            //         <a href="https://www.instagram.com/tasmanianjuicepress/" rel="noopener noreferrer" target="_blank">
            //             <i className="fa fa-instagram" aria-hidden="true" />
            //         </a>
            //     </div>
            // </div>
     

            <Footer size="mega">
            <FooterSection type="bottom">
                <FooterDropDownSection title="Features">
                    <FooterLinkList>
                        <a href="#">About</a>
                        <a href="#">Terms</a>
                        <a href="#">Partners</a>
                        <a href="#">Updates</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Details">
                    <FooterLinkList>
                        <a href="#">Specs</a>
                        <a href="#">Tools</a>
                        <a href="#">Resources</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="Technology">
                    <FooterLinkList>
                        <a href="#">How it works</a>
                        <a href="#">Patterns</a>
                        <a href="#">Usage</a>
                        <a href="#">Products</a>
                        <a href="#">Contracts</a>
                    </FooterLinkList>
                </FooterDropDownSection>
                <FooterDropDownSection title="FAQ">
                    <FooterLinkList>
                        <a href="#">Questions</a>
                        <a href="#">Answers</a>
                        <a href="#">Contact Us</a>
                    </FooterLinkList>
                </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="Title">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>



         )
    }
}

export default FooterDetail;
