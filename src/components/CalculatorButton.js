import React, {Component} from 'react';

class CalculatorButton extends Component {
    render() {
        return (
            <button name={this.props.name} onClick={e => this.props.onClick(e.target.name)}>{this.props.name}</button>
        );
    }
}

export default CalculatorButton;