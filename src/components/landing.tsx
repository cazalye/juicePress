import React, {Component} from 'react';
import "./landing.scss";
import LandingSections from "./landingSections";
import FooterDetail from './footer';
import Shop from './shop';
import RegularRange from './regularRange';

class Landing extends Component {
    render() {
        return (
            <div id="landing">
                <a id="home"/>
                <div id="hero">
                            <div className="title">
                                <h1>The Tasmanian Juice Press</h1>
                                {/* <h2>We make junk-free Cold Pressed Juices from fruit <br/> and vegetables and that's it!</h2> */}
                                <h2>Cold Pressed Juices from fresh fruit & vegetables</h2>
                            </div>
                </div>   
                <a id="range"/> 
                <div id="regular-range">
                    <h3 className="regular-range-title">Regular Juice Range</h3>
                    <div className="down-arrow">
                        <i className="fas fa-arrow-down"/>
                    </div>
                    <div className="regular-range-container">
                        <RegularRange
                            Title="Orange Juice"
                            // Image="/img/special2.jpg"
                            // Description="Orange, apple + vitamin C"
                            Alt="Orange juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-orange-juice-2l/"
                        />
                        <RegularRange
                            Title="Huon Valley Apple Juice"
                            // Image="/img/special2.jpg"
                            // Description="Huon Valley Apples, vitamin C"
                            Alt="Apple juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-apple-juice-2l/"
                        />
                        <RegularRange
                            Title="Citrus"
                            // Image="/img/reboot.png"
                            Description="Pineapple, lemon, orange, apple + ginger"
                            Alt="citrus juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-citrus-blend-2l/"
                        />
                        <RegularRange
                            Title="Reboot"
                            // Image="/img/reboot.png"
                            Description="Carrot, lemon, orange, ginger, apple + turmeric"
                            Alt="reboot juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-reboot-blend-2l/"
                        />
                        <RegularRange
                            Title="Greens"
                            // Image="/img/reboot.png"
                            Description="Silverbeet, tuscan cabbage, celery, parsley, mint + apple"
                            Alt="Greens juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-greens-blend-2l/"
                        />
                        <RegularRange
                            Title="Fruits"
                            // Image="/img/special2.jpg"
                            Description="Watermelon, raspberry, apple, lemon + mint"
                            Alt="Fruits juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-fruits-blend-2l/"
                        />
                        <RegularRange
                            Title="Veg"
                            // Image="/img/special2.jpg"
                            Description="Beetroot, carrot, ginger, lemon + apple"
                            Alt="Veg juce bottle"
                            Link="https://brandsonparade.com/product/carrot-beetroot-lemon-apple-orange-ginger-vitamin-c/"
                        />
                        <RegularRange
                            Title="Special"
                            // Image="/img/special2.jpg"
                            Description="See our Instagram or Facebook page for our weekly special"
                            Alt="Weekly Special juce bottle"
                            Link="https://brandsonparade.com/product/tasmanian-juice-press-cold-pressed-weekly-special-2l/"
                        />
                    </div>
                </div>
                <div className="section-break"/>
                <a id="about"/>            
                <LandingSections
                    Title1="WE ARE"
                    Title2="LOCAL"
                    Description="We’re a Tasmanian owned and operated small business, making junk-free cold pressed juices from locally sourced fruit and vegetables."
                    Image="/img/about1.jpg" 
                    alt="Juice Press Staff"
                />
                <div className="section-break"/>
                <a id="enviro"/>
                <LandingSections
                    Title1="WE CARE ABOUT"
                    Title2="THE ENVIRONMENT"
                    Description="We’re all about sustainability and minimising waste.
                    Our juices are packaged in glass bottles, return yours for a discount on future purchases."
                    Image="/img/enviro.jpg" 
                    alt="Glass bottles full of different juices"
                />
                <div className="section-break"/>
                <a id="visitUs"/>
                <LandingSections
                    Title1="COME"
                    Title2="VISIT US"
                    Description="We’re at the Farm Gate Market on Bathurst St. in Hobart every Sunday from 8.30 am - 12.30.
                    We’d love to see you there!"
                    Image="/img/market1.jpg" 
                    alt="Tasmanian Juice Press at the Farm Gate Market"
                />
                <div className="section-break"/>
                <a id="contact"/>
                <LandingSections
                    Title1="CONTACT"
                    Title2="US"
                    Description="If you have any queries about our products or would like to provide some feedback, please get in touch. We also do wholesale and bulk orders upon request. We look forward to hearing from you!"
                    Description2="Phone: 0438 406680"
                    Description3="Email: james@brandsonparade.com"
                    Image="/img/ContactUs.jpg" 
                    alt="Contact details for The Tasmanian Juice Press"
                />
                <div className="section-break"/>
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
            </div>
            
        )
    }
}

export default Landing;
