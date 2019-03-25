import React, {Component} from 'react';
import CalculatorButton from './CalculatorButton';

class CalculatorPad extends Component {
    render() {
        return (
            <div className="calculatorPad">
                <CalculatorButton name="1" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="2" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="3" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="4" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="5" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="6" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="7" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="8" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="9" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="0" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="+" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="-" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="*" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="/" onClick={this.props.onClick}></CalculatorButton>
                <CalculatorButton name="=" onClick={this.props.onClick}></CalculatorButton>
            </div>
        );
    }
}

export default CalculatorPad;
