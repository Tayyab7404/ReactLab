import React from 'react';
import Child from './Child.js';
import './App.css';

const App = () => {
    return React.createElement('div', {className: 'container'},
                               React.createElement('h1', null, 'Parent Component'),
                               React.createElement(Child, { message: 'Hello from child.js without using jsx framework!' })
    );
};

export default App;