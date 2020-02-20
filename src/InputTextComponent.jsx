import React from 'react';
import LogArea from './LogArea.jsx';

class InputTextComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputText1: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ inputText1: e.target.value });
    }

    render() {
        return (
            <div>
                <form className="InputTextComp">
                    <div><b> Nome: </b></div>
                    <input type="text" id="inputText1" name="myInputText" onChange={this.handleChange} value={this.state.value} />
                </form>
                {/*<p>{this.state.inputText1}</p>*/}
                <LogArea name={this.state.inputText1}></LogArea>
            </div>
        );
    }
}

export default InputTextComponent;