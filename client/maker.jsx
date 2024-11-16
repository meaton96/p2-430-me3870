const helper = require('./helper');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const handleDomo = (e, onDomoAdded) => {
    e.preventDefault();
    helper.hideError();

    const name = document.querySelector('#domoName').value;
    const age = document.querySelector('#domoAge').value;
    const attack = document.querySelector('#attack').value;
    const health = document.querySelector('#health').value;

    if (!name || !age || !attack || !health) {
        helper.handleError('Both name and age are required');
        return false;
    }

    helper.sendPost(e.target.action, { name, age, health, attack }, onDomoAdded);
    return false;
}

const DomoForm = (props) => {
    return (
        <div className='form-container'>
            <button id='makeRandom' className='makeRand'
                onClick={(e) => helper.sendPost('/makeRandom', {}, props.triggerReload)}>
                Make Random Domo
            </button>
            <form id='domoForm' name='domoForm' onSubmit={(e) => handleDomo(e, props.triggerReload)} action='/maker' method='POST' className='domoForm'>
                <label htmlFor='name'>Name: </label>
                <input id='domoName' type='text' name='name' placeholder='name' />
                <label htmlFor='age'>Age: </label>
                <input id='domoAge' type='text' name='age' placeholder='age' />
                <label htmlFor='attack'>Attack: </label>
                <input id='attack' type='text' name='attack' placeholder='attack' />
                <label htmlFor='health'>Health: </label>
                <input id='health' type='text' name='health' placeholder='health' />
                <input className='makeDomoSubmit' type='submit' value='Make Domo' />
            </form>

        </div>
    );
};

const DomoList = (props) => {

    const { domos } = props;


    if (domos.length === 0) {
        return (
            <div className='domoList'>
                <h3 className='emptyDomo'>No Domos yet</h3>
            </div>
        );
    }

    const domoNodes = domos.map((domo) => {
        return (
            <div key={domo._id} className={`domo domo-container is-flex is-align-items-center`}>
                <div className='columns'>
                    <div className='column is-one-quarter'>
                        <img src='/assets/img/domoface.jpeg' alt='domo face' className='domoFace' />
                    </div>
                    <div className='column is-three-quarters'>
                        <h3>Name: {domo.name}</h3>
                        <h3>Age: {domo.age}</h3>
                        <h3>Attack: {domo.attack}</h3>
                        <h3>Health: {domo.health}</h3>
                    </div>
                </div>
            </div>
        );
    });

    return (<div className='domoList'>{domoNodes}</div>);

};


const App = () => {
    const [reloadDomos, setReloadDomos] = useState(false);
    const [domos, setDomos] = useState([]);
    useEffect(() => {
        const loadDomosFromServer = async () => {
            const response = await fetch('/getDomos');
            const body = await response.json();
            setDomos(body.domos);
        };
        loadDomosFromServer();
    }, [reloadDomos]);

    return (
        <div className=''>
            <div id="makeDomo" className=''>
                <DomoForm triggerReload={() => setReloadDomos(!reloadDomos)} />
            </div>
            <div id="domoList" className=''>
                <DomoList domos={domos} />
            </div>
        </div>
    );
};

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(<App />);
}

window.onload = init;

exports.DomoList = DomoList;
