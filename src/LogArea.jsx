import React from 'react';
import InputTextComponent from './InputTextComponent.jsx';

class LogArea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <div><b>Log Area:</b></div>
                    <textarea id="textArea1" value={this.props.name}/>
                </form>
            </div>
        );
    }
}

export default LogArea;