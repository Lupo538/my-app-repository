import React from 'react';

class CheckBoxComponent extends React.Component {
    render()
    {
        return (
            <div><p>My Check Box</p>
                <input type="checkbox" id="option1" /><label>First Option</label><br />
                <input type="checkbox" id="op2" /><label>Second Option</label><br />
                <input type="checkbox" id="box3" /><label>Third Option</label><br />
            </div>
        ); 
    }
}

export default CheckBoxComponent;