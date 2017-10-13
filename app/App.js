import React from 'react';
import ReactDom from 'react-dom';

export class MainComponent extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDom.render(
    <MainComponent />,
    document.getElementById('app')
);
