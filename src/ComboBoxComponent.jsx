import React from 'react';
//import { Combobox } from 'react-widgets'
//import Combobox from 'react-widgets/lib/Combobox'
//import { ComboBox } from '@progress/kendo-react-dropdowns';
import Select from "react-dropdown-select";

const sports = [
    { value: 'baseball', label: 'Baseball' },
    { value: 'basketball', label: 'Basketball' },
    { value: 'football', label: 'Football' },
    { value: 'tennis', label: 'Tennis' },
    { value: 'hockey', label: 'Hockey' }
]

class ComboBoxComponent extends React.Component {  

    render() {
        return (
            <div className="ComboBoxComp">
                <div>Favorite sport:</div>
                {/*<ComboBox data={sports} />*/}
                <Select options={sports} />
            </div>
        );
    }
}

export default ComboBoxComponent