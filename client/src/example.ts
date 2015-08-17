import React from 'react';
import Main from './components/main.jsx!';

export class Example {
    element: HTMLElement;
    main: HTMLElement;

    constructor (element: HTMLElement) {
        this.element = element;
        Main.defaultProps = { users: ['Local of Taro', 'Local of Hanako'] };
        this.main = React.createElement(Main);
    }

    render() {
        React.render(this.main, this.element);
    }
}
