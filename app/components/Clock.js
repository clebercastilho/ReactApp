import React from 'react';

export class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.dateTimeNow = new Date();
    }
    
    render() {
        return (
            <h2>Hoje é {this.dateTimeNow.toLocaleDateString()}</h2>
        );
    }
}