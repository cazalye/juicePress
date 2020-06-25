import React, {Component} from 'react';
import "./landing.scss";
import LandingSections from "./landingSections";


class Landing extends Component {
    render() {
        return (
            <div id="landing">
                <div id="hero">
                    <div className="title">
                        <h1>The Tasmanian Juice Press</h1>
                        <h2>We make cold-pressed junk free juice</h2>
                    </div>
                </div>
                <LandingSections
                    Title1="WE ARE"
                    Title2="LOCAL"
                    Description="We’re a Tasmanian owned and operated small business, making junk-free cold pressed juices from locally sourced fruit and vegetables"
                    Image="/img/logo.jpg"
                    alt="The Juice Press team sitting on an apple crate"
                />

                {/* <div id="about">
                    <h1>We are local</h1>
                </div>

                <div id="enviro">
                    <h1>We care about the environment</h1>
                </div>
                <div id="visit">
                    <h1>Come visit us</h1>
                    </div>  
                <div id="shop">
                    <h1>SHOP</h1>
                </div> */}
            </div>
        )
    }
}

export default Landing;
