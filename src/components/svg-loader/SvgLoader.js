import React, {Component} from 'react';
import './SvgLoader.css';

export default class SvgLoader extends Component{

    render(){
        return(
            <div className="svgLoaderContainer">
                <img src={this.props.src} alt={this.props.src}/>
            </div>
        );
    }
}