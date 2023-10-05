// import './styles/index.scss';
// console.log('Application init!! index.js!!');

// const $outer = document.createElement('main');

// const $item = document.createElement('div');
// $item.innerHTML = 'ITEM';
// $outer.appendChild($item);

// const root = document.getElementById('root');
// root.appendChild($outer);

// // Create a class property without a constructor
// class Game {
//     name = 'Violin Charades';
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement('p');
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement('h1');
// heading.textContent = 'Interesting!';

// // Append SVG and heading nodes to the DOM
// root.append(heading, p);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { sum } from './lib/util';

const n = sum(5, 10);
console.log('sum:: ', n);

if (typeof window === 'undefined') {
    throw new Error('>>> not mounted!!');
}

const root = document.getElementById('root');
if (root === null) {
    throw new Error('root not defined!!');
}
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
