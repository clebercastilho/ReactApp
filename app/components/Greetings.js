import React from 'react';

export class Greetings extends React.Component {
    render() {
        return (
            <div>
                <h1>Olá {this.props.name}!</h1>
            </div>
        );
    }
}