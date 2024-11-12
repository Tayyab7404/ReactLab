import React from 'react';

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num1: '', num2: '' };
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => {
            const { num1, num2 } = this.state;
            this.props.onNumberChange(Number(num1), Number(num2));
        });
    };

    render() {
        return (
            <div className='inputs'>
                <label htmlFor='num1'>Enter Number 1: </label>
                <input type='number' name='num1' value={this.state.num1} onChange={this.handleChange}/><br/>
                <label htmlFor='num2'>Enter Number 2: </label>
                <input type='number' name='num2' value={this.state.num2} onChange={this.handleChange}/><br/>
            </div>
        );
    };
};

export default NumberInput;