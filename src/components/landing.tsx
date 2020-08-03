import React, {Component} from 'react';
import "./landing.scss";
import LandingSections from "./landingSections";
import FooterDetail from './footer';
import Shop from './shop';
import RegularRange from './regularRange';
import MarketMap from './map';
import SectionBreakImage from './sectionBreakImage';

class Landing extends Component {
    render() {
        return (
            <div id="landing">
                <a id="home"/>
                <div id="hero">
                    <div className="hero-image">
                        <div className="title">
                            <h1>The Tasmanian Juice Press</h1>
                            {/* <h2>We make junk-free Cold Pressed Juices from fruit <br/> and vegetables and that's it!</h2> */}
                            <h2>Cold Pressed Juices from fresh fruit & vegetables</h2>
                        </div>
                    </div>
                </div> 
                <div className="down-arrow">
                        <i className="fas fa-angle-double-down"/>
                </div>  
                <a id="range"/> 
                <div id="regular-range">
                    <img className="range-logo" src="./img/logoTransparent.png"  width="150px"/>
                    <h3 className="regular-range-title">Regular Juice Range</h3>
                    <div className="regular-range-container">
                        <RegularRange
                            Title="Orange Juice"
                            // Description="Orange, apple + vitamin C"
                            Alt="Orange juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/orange-juice/"
                        />
                        <RegularRange
                            Title="Huon Valley Apple Juice"
                            // Description="Huon Valley Apples, vitamin C"
                            Alt="Apple juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/apple-juice/"
                        />
                        <RegularRange
                            Title="Citrus"
                            Description="Pineapple, lemon, orange, apple + ginger"
                            Alt="citrus juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/citrus-blend/"
                        />
                        <RegularRange
                            Title="Reboot"
                            Description="Carrot, lemon, orange, ginger, apple + turmeric"
                            Alt="reboot juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/reboot-blend/"
                        />
                        <RegularRange
                            Title="Greens"
                            Description="Silverbeet, tuscan cabbage, celery, parsley, mint + apple"
                            Alt="Greens juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/greens-blend/"
                        />
                        <RegularRange
                            Title="Fruits"
                            Description="Watermelon, raspberry, apple, lemon + mint"
                            Alt="Fruits juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/fruits-blend/"
                        />
                        <RegularRange
                            Title="Veg"
                            Description="Beetroot, carrot, ginger, lemon + apple"
                            Alt="Veg juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/veg-blend/"
                        />
                        <RegularRange
                            Title="Special"
                            Description="See our Instagram or Facebook page for our weekly special"
                            Alt="Weekly Special juce bottle"
                            Link="https://brandsonparade.com/product-category/the-tasmanian-juice-press/weekly-special/"
                        />
                    </div>
                </div>
                <div className="range-section-break">
                    <div className="transparent-title">
                        <h1 className="transparent-title1">WE ARE</h1>
                        <h1 className="transparent-title2">LOCAL</h1>
                    </div>
                </div>
                {/* <SectionBreakImage
                    Image="/img/bottles1.jpg"
                    alt="Colourful juice bottles lined up"
                /> */}
                 <a id="about"/> 
                {/* <LandingSections
                    Title1="WE ARE"
                    Title2="LOCAL"
                    Description="We’re a Tasmanian owned and operated small business, making junk-free cold pressed juices from locally sourced fruit and vegetables."
                    Image="/img/about1.jpg" 
                    alt="Juice Press Staff"
                /> */}
                <LandingSections
                    Title1="WE'RE AS LOCAL"
                    Title2="AS OUR JUICE"
                    Description="We’re a Tasmanian owned and operated small business, making junk-free cold pressed juices from locally sourced fruit and vegetables."
                    Image="/img/local.jpg" 
                    alt="Tasmanian Juice Press at the local Farm Gate Market"
                />
                <div className="local-section-break">
                    <div className="transparent-title-2">
                        <h1 className="transparent-title1">WE CARE ABOUT</h1>
                        <h1 className="transparent-title2">THE ENVIRONMENT</h1>
                    </div>
                </div> 
                  {/* <SectionBreakImage
                    Image="/img/marketShopper.jpg"
                    alt="A customer shops for juice at the Farm Gate Market"
                /> */}
                <a id="enviro"/>
                <LandingSections
                    Title1="NO PLASTIC"
                    Title2="BOTTLES HERE"
                    Description="We’re all about sustainability and minimising waste.
                    Our juices are packaged in glass bottles, which are 100% re-usable and recyclable. Return yours for a discount on future purchases!"
                    // Image="/img/enviro.jpg" 
                    Image="/img/nathanBottle.jpg" 
                    alt="Glass bottles full of different juices"
                />
                   {/* <SectionBreakImage
                    Image="/img/bottles2.jpg"
                    alt="A customer shops for juice at the Farm Gate Market"
                /> */}
                <div className="contact-section-break">
                    <div className="transparent-title">
                        <h1 className="transparent-title1">CONTACT</h1>
                        <h1 className="transparent-title2">US</h1>
                    </div>
                </div> 
                <a id="contact"/>
                <LandingSections
                    Title1="DROP US"
                    Title2="A LINE..."
                    Description="If you have any queries about our products or would like to provide some feedback, please get in touch. We also do wholesale and bulk orders upon request. We look forward to hearing from you!"
                    Description2="Phone: 0438406680"
                    Description3="Email: james@brandsonparade.com"
                    Image="/img/contact.jpg" 
                    alt="Contact details for The Tasmanian Juice Press"
                />
                {/* <SectionBreakImage
                    Image="/img/marketPurchase.jpg"
                    alt="A customer shops for juice at the Farm Gate Market"
                /> */}
                  <div className="visit-section-break">
                    <div className="transparent-title">
                        <h1 className="transparent-title1">COME</h1>
                        <h1 className="transparent-title2">VISIT US</h1>
                    </div>
                </div> 
                <a id="visitUs"/>
                <LandingSections
                    Title1="WE'RE ALWAYS "
                    Title2="UP FOR A CHAT"
                    Description="We’re at the Farm Gate Market on Bathurst St. in Hobart every Sunday from 8.30 am - 12.30.
                    We’d love to see you there!"
                    Image="/img/visit.jpg" 
                    alt="Tasmanian Juice Press at the Farm Gate Market"
                />
                {/* <LandingSections
                    Title1="COME"
                    Title2="VISIT US"
                    Description="We’re at the Farm Gate Market on Bathurst St. in Hobart every Sunday from 8.30 am - 12.30.
                    We’d love to see you there!"
                    Image="/img/marketPurchase.jpg" 
                    alt="Tasmanian Juice Press at the Farm Gate Market"
                /> */}
                  <div className="shop-section-break"/>
                 {/* <div className="down-arrow-2">
                        <i className="fas fa-angle-double-down"/>
                </div>   */}
                 <MarketMap/>
              
                <a id="shop"/>
                <div id="shop-section">
                    <h1>SHOP JUICES</h1>
                    <div className="shop-container">
                        <Shop
                        juiceTitle="Juice Subscription"
                        juiceImage="./img/subscription.png"
                        alt="Bottles of juice, weekly subscription"
                        shopLink="https://brandsonparade.com/product/tasmanian-juice-press-subscription/"
                        />
                        <Shop
                        juiceTitle="Weekly Special"
                        juiceImage="./img/special.png"
                        alt="Weekly special juice bottle"
                        shopLink="https://brandsonparade.com/product-category/the-tasmanian-juice-press/weekly-special/"
                        />
                        <Shop
                        juiceTitle="Immune Boost"
                        juiceImage="./img/immune.jpg"
                        alt="Bottles of immune boost juice"
                        shopLink="https://brandsonparade.com/product-category/the-tasmanian-juice-press/immune-boost/"
                        />
                        <Shop
                        juiceTitle="Juice Packs"
                        juiceImage="./img/pack.jpg"
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
                        juiceImage="./img/2l.jpg"
                        alt="2L juice bottles"
                        shopLink="https://brandsonparade.com/product-category/the-tasmanian-juice-press/2l-juice-bottles/"
                        />
                    </div>
                </div>
                <FooterDetail/>
            </div>
            
        )
    }
}

export default Landing;
