import React from 'react';
import LogArea from './LogArea';

class CheckBoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { myCheckBox: "" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target);
        console.log(e.target.label);
        console.log(e.target.checked);
        this.setState({ myCheckBox: e.target.checked });
    }

    render()
    {
        return (
            <div className="CheckBoxComp">
                <div><b> Age: </b></div>
                <input type="checkbox" id="option1" name="myCheckBox" value={this.state.myCheckBox} onChange={this.handleChange}/>
                    <label>under 25</label><br/>
                <input type="checkbox" id="option2" name="myCheckBox" value={this.state.myCheckBox} onChange={this.handleChange}/>
                    <label>25-50</label><br/>
                <input type="checkbox" id="option3" name="myCheckBox" value={this.state.myCheckBox} onChange={this.handleChange}/>
                    <label>over 50</label><br/>
                <LogArea name={this.state.myCheckBox}></LogArea>
            </div>
        ); 
    }
}

export default CheckBoxComponent;