import { Example } from './example';
import 'whatwg-fetch'; // window.fetch JavaScript polyfill.

export function main(el: HTMLElement): void {
    let exp = new Example(el);
    exp.render();
}
