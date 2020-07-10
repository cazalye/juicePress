import React, {Component} from 'react';
import "./landing.scss";
import LandingSections from "./landingSections";
import FooterDetail from './footer';

class Landing extends Component {
    render() {
        return (
            <div id="landing">
                <a id="home"/>
                <div id="hero">
                        {/* <a href="/"> */}
                            <div className="title">
                                <h1>The Tasmanian Juice Press</h1>
                                {/* <h2>We make junk-free Cold Pressed Juices from fruit <br/> and vegetables and that's it!</h2> */}
                                <h2>Cold Pressed Juices from fresh fruit & vegetables</h2>
                            </div>
                        {/* </a> */}
                </div>   
                <a id="about"/>            
                <LandingSections
                    Title1="WE ARE"
                    Title2="LOCAL"
                    Description="We’re a Tasmanian owned and operated small business, making junk-free cold pressed juices from locally sourced fruit and vegetables"
                    Image="/img/about.jpg" 
                    alt="Juice Press Staff"
                />
                <LandingSections
                    Title1="WE CARE ABOUT"
                    Title2="THE ENVIRONMENT"
                    Description="We’re all about sustainability and minimising waste
                    Our juices are packaged in glass bottles- return yours for a discount on future purchases"
                    Image="/img/bottles.jpg" 
                    alt="Glass bottles full of different juices"
                />
                <a id="visitUs"/>
                <LandingSections
                    Title1="COME"
                    Title2="VISIT US"
                    Description="We’re at the Farm Gate Market on Bathurst st. in Hobart every Sunday from 8.30 am - 12.30
                    We’d love to see you!"
                    Image="/img/Market.jpg" 
                    alt="Tasmanian Juice Press at the Farm Gate Market"
                />
                
                
                <a id="shop"/>
                <FooterDetail/>
                <a id="contact"/>
            </div>
            
        )
    }
}

export default Landing;
