const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const Battle = (props) => {
    const [resultsPermanent, setResultsPermanent] = useState(false);
    const [singleList, setSingleList] = useState(true);

    const [domos, setDomos] = useState([]);
    const [leftDomos, setLeftDomos] = useState([]);
    const [rightDomos, setRightDomos] = useState([]);

    useEffect(() => {
        const loadDomosFromServer = async () => {
            const response = await fetch('/getDomos');
            const body = await response.json();
            setDomos(body.domos);
        };
        loadDomosFromServer(); 
    }, []);

    const handleBattleRoundEnd = async (winners, losers) => {
        for (let i = 0; i < winners.length; i++) {
            winners[i].style = '';
        }
        
        if (resultsPermanent) {
            for (let i = 0; i < losers.length; i++) {
                const response = await fetch ('/domo', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name: losers[i].name}),
                });
                if (response.status === 200) {
                    console.log(`Domo ${losers[i].name} deleted`);
                }
                else {
                    console.log(`Error deleting domo ${losers[i].name}`);
                }
            }
        }
        setDomos([...winners]);
        setSingleList(true);
    };

    const handleBattleAction = (leftA, rightA) => {
        let i = 0;
        let left = [...leftA];
        let right = [...rightA];
        let winners = [];
        let losers = [];
        console.log(left, right);
        for (let i = 0; i < left.length; i++) {
            console.log(`fighting ${i}`);
            let leftHealth = left[i].health;
            let rightHealth = right[i].health;

            while (leftHealth > 0 && rightHealth > 0) {
                let rightAtt = Math.floor(Math.random() * right[i].attack);
                let leftAtt = Math.floor(Math.random() * left[i].attack);
                leftHealth -= rightAtt;
                rightHealth -= leftAtt;
            }
            if (leftHealth <= 0) {
                left[i].style = 'loser';
                right[i].style = 'winner';
                winners.push(right[i]);
                losers.push(left[i]);
            }
            else {
                left[i].style = 'winner';
                right[i].style = 'loser';
                winners.push(left[i]);
                losers.push(right[i]);
            }
        }
        setLeftDomos([...left]);
        setRightDomos([...right]);
        setTimeout(() => handleBattleRoundEnd(winners, losers), 2000);
        console.log("winners", winners);
        //setDomos(winners);
    };
    const handleBattle = () => {
        let left = [];
        let right = [];
        let leftover = [];
        let domosCopy = [...domos];

        //shuffle
        for (let i = domosCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [domosCopy[i], domosCopy[j]] = [domosCopy[j], domosCopy[i]];
        }

        while (domosCopy.length > 1) {
            left.push(domosCopy.pop());
            right.push(domosCopy.pop());
        }
        if (domosCopy.length > 0) {
            leftover.push(domosCopy.pop());
        }
        setLeftDomos(left);
        setRightDomos(right);
        setSingleList(false);

        setTimeout(() => handleBattleAction(left, right), 1000);
    }



    const handlePermaToggle = (e) => {
        setResultsPermanent(e.target.checked);
    };
    const handleToggleLayout = () => {
        setSingleList(!singleList);
    };

    const renderHeader = () => {


        return (
            <>
                <div className='container has-text-centered'>
                    <h1 className='title'>Battle Page</h1>
                </div>
                <div className='resultsToggle container has-text-centered my-2'>
                    <label className="switch">
                        Results Permanent:
                        <input
                            type="checkbox"
                            checked={resultsPermanent}
                            onChange={handlePermaToggle}
                            className='mx-2'
                        />
                    </label>
                </div>
                <div className='container has-text-centered my-2'>
                    <button className='button is-primary' onClick={handleBattle}>
                        Start Battle
                    </button>
                </div>
            </>
        );

    }

    return (
        <>
            {renderHeader()}
            <div className='container'>
                {(singleList ?
                    <>
                        {(domos.map(domo => <BattleDomo domo={domo} />))}
                    </>
                    :
                    <div className='container columns'>
                        <div className='column is-half'>
                            {(leftDomos.map((domo) =>

                                <BattleDomo domo={domo} />

                            ))}
                        </div>
                        <div className='column is-half'>
                            {(rightDomos.map((domo) =>

                                <BattleDomo domo={domo} />

                            ))}
                        </div>
                    </div>)}
            </div>
        </>
    );
};


const BattleDomo = (props) => {

    const { name, attack, style } = props.domo;
    let { health } = props.domo;

    return (
        <div key={domo._id} className={`domo battle-domo ${style}`}>
            <div className='has-text-aligned-center'>
                <h2 className='subtitle'>{name}</h2>
            </div>
            <div className='columns'>
                <div className='column is-flex is-justify-content-end is-align-items-center'>
                    <img src='/assets/img/domoface.jpeg' alt='domo face' className='domoFace' />
                </div>
                <div className='column is-flex is-justify-content-start is-align-items-center'>
                    <span className='px-1'>Attack: {attack}</span>
                    <span className='px-1'>Health: {health}</span>
                </div>
            </div>
        </div>

    );

};

const init = () => {
    const root = createRoot(document.querySelector('#app'));
    root.render(<Battle />);
};

window.onload = init;