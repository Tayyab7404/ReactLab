import React from 'react';
import NumberInput from './NumberInput.jsx';
import SumDisplay from './SumDisplay.jsx';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num1: 0, num2: 0 };
    };

    handleNumberChange = (num1, num2) => {
        this.setState({ num1, num2 });
    };

    render() {
        return (
            <div className='container'>
                <h1>Sum Calculator</h1>
                <NumberInput onNumberChange={this.handleNumberChange} />
                <SumDisplay num1={this.state.num1} num2={this.state.num2} />
            </div>
        );
    };
};

export default App;