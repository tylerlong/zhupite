import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<h1>Hello world</h1>, container);

(async () => {
  await store.init();
  await store.load();
  store.ready = true;
})();
