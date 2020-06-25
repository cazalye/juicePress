import React, { Component } from 'react';

interface Props {
    Title1: string;
    Title2: string;
    Description: string;
    Image: string;
    alt: string;
}
class LandingSections extends Component<Props, Props> {
    render(){
        return (
            <div className="section">
                <div className="leftSection">
                    <img src={this.props.Image} height="" width="100%" alt={this.props.alt}/>
                    <h2 className="title1">{this.props.Title1}</h2>
                    <h2 className="title2">{this.props.Title2}</h2>
                </div>
                <div className="rightSection">
                    <p>{this.props.Description}</p>
                </div>
            </div>
            
        )
    }
}

export default LandingSections;
