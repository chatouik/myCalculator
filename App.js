import React, { Component } from 'react';
import Screen from './components/Screen';
import CalculatorPad from "./components/CalculatorPad";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          result: "",
        };
    }

    onClick = button => {
        if (!button.value.isNaN()) {

        }

    };
    render() {
        return (
            <div>
                <div className="calculator">
                    <Screen result={this.state.result}/>
                    <CalculatorPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}