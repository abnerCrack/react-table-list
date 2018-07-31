import React from 'react';
import {render} from 'react-dom';
import Example from './index';

function start() {
    render(<Example />, document.getElementById('app'));
}

start();

if(module.hot) start();

