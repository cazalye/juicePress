import React, { Component } from 'react';

interface Props {
    Title1: string;
    Title2: string;
    Description: string;
    Description2?: string;
    Description3?: string;
    Image: string;
    alt: string;
}
class LandingSections extends Component<Props, Props> {
    render(){
        return (
            <div className="section">
                 <div className="rightSection">
                    <h2 className="bar"/>
                    <h2 className="title1">{this.props.Title1}</h2>
                    <h2 className="title2">{this.props.Title2}</h2>
                    <p>{this.props.Description}</p>
                    <p className='desc2'>{this.props.Description2}</p>
                    <p className='desc3'>{this.props.Description3}</p>
                </div>
                <div className="leftSection">
                    <div className="image-background"/>
                    <img src={this.props.Image} height="" width="90%" alt={this.props.alt}/>
                </div>
               
            </div>
            
        )
    }
}

export default LandingSections;
