const helper = require('./helper');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');


const App = () => {
    return (
        <div className=''>
            <h1>App</h1>
        </div>
    );
};

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(<App />);
}

window.onload = init;

export default App;
