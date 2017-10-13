import React from 'react';

export class Greetings extends React.Component {
    render() {
        return (
            <h1>Olá {this.props.name}!</h1>
        );
    }
}