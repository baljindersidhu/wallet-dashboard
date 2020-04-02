import React, {Component} from 'react';
import './Sidenav.css';

export default class Sidenav extends Component{
    
    getSidenavActions(){
        let sidenavActionIcons = [
            'dashboard.svg', 'calendar.svg', 'noun_Income_772948.svg', 'mailbox.svg'
        ];
    
        return sidenavActionIcons.map(icon => 'icons/' + icon);
    }
    
    render(){
        return (
            <div className="sidenavContainer column">
                <div className="user">
                    <img src="icons/avatar.png" alt="user_icon"/>
                    <div className="userName">Frank</div>
                    <div className="userName">Foster</div>
                </div>
    
                <div className="fillParent"></div>
    
                {this.getSidenavActions().map(
                    (icon, key) => <div className="action" key={key}><img src={icon} alt={icon}/></div>
                )}
    
                <div className="fillParent"></div>
    
                <div className="action"><img src="icons/logout.svg" alt="icons/logout.svg"/></div>
            </div>
        );
    }
}