import React, { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let ans = null;
        try {
            ans = eval(value);
        }
        catch(error) {
            ans = 'Error';
        }
        setValue(ans);
    };

    return (
        <div className='container'>
            <div className='calculator'>
                <form>
                    <div className='display'>
                        <input type='text' value={value} onChange={e => setValue(value)}/>
                    </div>
                    <div>
                        <input type='button' value='AC' onClick={e => setValue('')}/>
                        <input type='button' value='←' onClick={e => setValue(value.slice(0, -1))}/>
                        <input type='button' value='(' onClick={e => setValue(value + e.target.value)}/>
                        <input type='button' value=')' onClick={e => setValue(value + e.target.value)}/>
                    </div>
                    <div>
                        {
                            ['7','8','9','/'].map((v, idx) => {
                                return ( <input key={idx} type='button' value={v} onClick={e => setValue(value + e.target.value)}/> )
                            })
                        }
                    </div>
                    <div>
                    {
                            ['4','5','6','*'].map((v, idx) => {
                                return ( <input key={idx} type='button' value={v} onClick={e => setValue(value + e.target.value)}/> )
                            })
                        }
                    </div>
                    <div>
                    {
                            ['1','2','3','-'].map((v, idx) => {
                                return ( <input key={idx} type='button' value={v} onClick={e => setValue(value + e.target.value)}/> )
                            })
                        }
                    </div>
                    <div>
                        {
                            ['00','0','.','+'].map((v, idx) => {
                                return ( <input key={idx} type='button' value={v} onClick={e => setValue(value + e.target.value)}/> )
                            })
                        }
                    </div>
                    <div>
                        <input type='button' value='=' className='equal' onClick={handleSubmit}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;