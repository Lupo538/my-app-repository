import React from 'react';

class CheckBoxComponent extends React.Component {
    render()
    {
        return (
            <div className="CheckBoxComp"><p>Age:</p>
                <input type="checkbox" id="option1" /><label>under 25</label><br />
                <input type="checkbox" id="option2" /><label>25-50</label><br />
                <input type="checkbox" id="option3" /><label>over 50</label><br />
            </div>
        ); 
    }
}

export default CheckBoxComponent;