import React from 'react';
import Main from './main.jsx!';

export class Example {
    element: HTMLElement;
    main: HTMLElement;

    constructor (element: HTMLElement) {
        this.element = element;
        this.main = React.createElement(Main);
    }

    render() {
        React.render(this.main, this.element);
    }
}
