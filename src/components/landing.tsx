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
                <div className="sectionDivider"/>
                <LandingSections
                    Title1="WE ARE"
                    Title2="LOCAL"
                    Description="We’re a Tasmanian owned and operated small business, making junk-free cold pressed juices from locally sourced fruit and vegetables"
                    Image="/img/about.jpg" 
                    alt="The Juice Press team sitting on an apple crate"
                />
                <LandingSections
                    Title1="WE CARE ABOUT"
                    Title2="THE ENVIRONMENT"
                    Description="We’re all about sustainability and minimising waste
                    Our juices are packaged in glass bottles- return yours for a discount on future purchases"
                    Image="/img/bottles.jpg" 
                    alt="Glass bottles full of different juices"
                />
                <LandingSections
                    Title1="COME"
                    Title2="VISIT US"
                    Description="We’re at the Farm Gate Market on Bathurst st. in Hobart every Sunday from 8.30 am - 12.30
                    We’d love to see you!"
                    Image="/img/Market.jpg" 
                    alt="Tasmanian Juice Press at the Farm Gate Market"
                />
                <div className="sectionDivider"/>
            </div>
        )
    }
}

export default Landing;
