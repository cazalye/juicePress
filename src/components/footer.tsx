import React, { Component } from 'react';
import "./footer.scss";


class Footer extends Component{
    render() {
        return (
            <div className="footer-links">
                <p> footer</p>
                <a href="james@brandsonparade.com" rel="noopener noreferrer" target="_blank">
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
        </div>
        )
    }
}

export default Footer;
