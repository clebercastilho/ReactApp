import React from 'react';
import ReactDom from 'react-dom';

//componentes
import {Greetings} from './components/Greetings.js';
import {Clock} from './components/Clock.js';

export class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Greetings name='Cleber' />
                <Clock />
            </div>
        );
    }
}

ReactDom.render(
    <MainComponent />,
    document.getElementById('app')
);
