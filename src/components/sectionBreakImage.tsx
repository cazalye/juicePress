import React, { Component } from 'react'

interface Props {
    Image: string;
    alt: string;
}

class SectionBreakImage extends Component<Props> {

    render() {
        return (
            <div className="section-break-background">
                <img src={this.props.Image} height="" width="100%" alt={this.props.alt}/>
            </div>
        )
    }
}

export default SectionBreakImage
