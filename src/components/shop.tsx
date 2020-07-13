import React, { Component } from 'react';

interface Props {
    juiceTitle: string;
    juiceImage: string;
    alt: string;
    shopLink: string;

}
class Shop extends Component<Props, Props>{
    render() {
        return (
            <div className="juice-container">
                <a href={this.props.shopLink} rel="noopener noreferrer" target="_blank">
                    <img src={this.props.juiceImage} alt={this.props.alt} className="juice-image" width="100%"/>
                    <h3 className="juice-title">{this.props.juiceTitle}</h3> 
                </a>
            </div>
        );
    }
}

export default Shop;