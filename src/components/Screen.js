import React, {Component} from 'react';

class Screen extends Component {

    render() {
        return (
            <div className="result">
                {this.props.result}
            </div>
        );
    }
}


export default Screen;