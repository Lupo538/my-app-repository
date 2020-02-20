import React from 'react';
//import { Combobox } from 'react-widgets'
//import Combobox from 'react-widgets/lib/Combobox'
//import { ComboBox } from '@progress/kendo-react-dropdowns';
import Select from "react-dropdown-select";

const sports = [
    { value: 'baseball', label: 'Baseball'},
    { value: 'basketball', label: 'Basketball'},
    { value: 'football', label: 'Football'},
    { value: 'tennis', label: 'Tennis'},
    { value: 'hockey', label: 'Hockey'}
]

class ComboBoxComponent extends React.Component {  

    constructor(props) {
        super(props);
        this.state = { myComboBox: "" };
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(e) {
        console.log(e);
        //this.setState({ myComboBox: e.target.value });
    } 

    render() {
        return (
            <div className="ComboBoxComp">
                <div><b> Favorite sport: </b></div>
                {/*<ComboBox data={sports} name="myComboBox"/>*/}
                <Select options={sports} name="myComboBox" /> {/*value={this.state.myComboBox} onChange={this.handleChange}/>*/}
                {/*<p>{this.state.myComboBox}</p>*/}
            </div>
        );
    }
}

export default ComboBoxComponent