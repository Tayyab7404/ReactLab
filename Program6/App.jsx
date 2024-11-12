import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    };

    Incr = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    Decr = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render() {
        const mysty1 = {
            fontSize: '30px',
            color: 'green',
            margin: '10px',
            padding: '5px'
        }
        const mysty2 = {
            fontSize: '30px',
            color: 'red',
            margin: '10px',
            padding: '5px'
        }

        return (
            <div >
                <h1 align='center' style={{padding: '10px', color: 'coral', fontSize: '50px' }} >React JS - Counter App</h1>
                <p align='center' className={`$ first second third`}> Counter: {this.state.counter}</p>
                <div align='center'>
                    <button onClick={this.Incr} style={mysty1}>Increment</button>
                    <button onClick={this.Decr} style={mysty2}>Decrement</button>
                </div>
            </div>
        );
    };
};

export default App;