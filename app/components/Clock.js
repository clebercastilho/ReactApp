import React from 'react';

export class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.dateTimeNow = new Date();
    }
    
    render() {
        return (
            <div>
                <h2>Hoje é {this.dateTimeNow.toLocaleDateString()}</h2>
            </div>
        );
    }
}