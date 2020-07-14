import React, { Component } from 'react';

interface Props{
    Title: string;
    Image: string;
    Alt: string;
    Link: string;
}
class RegularRange extends Component <Props, Props> {
    render() {
        return (
            <div className="regular-range">
                <a href={this.props.Link} rel="noopener noreferrer" target="_blank">
                    <img src={this.props.Image} height="" width="180px" alt={this.props.Alt}/>
                    <div className="regular-text-box">
                        <h3 className="regular-title">{this.props.Title}</h3>
                    </div>
                </a>
            </div>
        );
    }
}

export default RegularRange;