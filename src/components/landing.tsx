import React, {Component} from 'react';
import "./landing.scss";
import LandingSections from "./landingSections";
import FooterDetail from './footer';
import Shop from './shop';

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
                    Image="/img/about1.jpg" 
                    alt="Juice Press Staff"
                />
                <a id="enviro"/>
                <LandingSections
                    Title1="WE CARE ABOUT"
                    Title2="THE ENVIRONMENT"
                    Description="We’re all about sustainability and minimising waste
                    Our juices are packaged in glass bottles- return yours for a discount on future purchases"
                    Image="/img/enviro.jpg" 
                    alt="Glass bottles full of different juices"
                />
                <a id="visitUs"/>
                <LandingSections
                    Title1="COME"
                    Title2="VISIT US"
                    Description="We’re at the Farm Gate Market on Bathurst st. in Hobart every Sunday from 8.30 am - 12.30
                    We’d love to see you!"
                    Image="/img/market1.jpg" 
                    alt="Tasmanian Juice Press at the Farm Gate Market"
                />
                <a id="shop"/>
                <div id="shop-section">
                    <h1>SHOP JUICES</h1>
                    <div className="shop-container">
                        <Shop
                        juiceTitle="Juice Subscripion"
                        juiceImage="./img/subscription.png"
                        alt="Bottles of juice, weekly subscription"
                        shopLink="https://brandsonparade.com/product/tasmanian-juice-press-subscription/"
                        />
                        <Shop
                        juiceTitle="Weekly Special"
                        juiceImage="./img/special.png"
                        alt="Weekly special juice bottle"
                        shopLink="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-weekly-juice-special-750ml/"
                        />
                        <Shop
                        juiceTitle="Immune Boost"
                        juiceImage="./img/immune.png"
                        alt="Bottles of immune boost juice"
                        shopLink="https://brandsonparade.com/product-category/the-tasmanian-juice-press/immune-boost/"
                        />
                        <Shop
                        juiceTitle="Juice Packs"
                        juiceImage="./img/pack.png"
                        alt="Bottles of juice packs"
                        shopLink="https://brandsonparade.com/product-category/juice-pack/"
                        />
                        <Shop
                        juiceTitle="750ml Juice Blend"
                        juiceImage="./img/750ml.png"
                        alt="750ml juice bottles"
                        shopLink="https://brandsonparade.com/product-category/the-tasmanian-juice-press/750ml-juice-bottles/"
                        />
                        <Shop
                        juiceTitle="2L Juice Blend"
                        juiceImage="./img/2l.png"
                        alt="2L juice bottles"
                        shopLink="https://brandsonparade.com/product-category/the-tasmanian-juice-press/2l-juice-bottles/"
                        />
                    </div>
                </div>
                
                <FooterDetail/>
                <a id="contact"/>
            </div>
            
        )
    }
}

export default Landing;
