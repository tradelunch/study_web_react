import './styles/index.scss';

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
