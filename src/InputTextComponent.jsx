import React from 'react';

class InputTextComponent extends React.Component {
    render() {
        return (
            <form className="InputTextComp">
                <label> Nome:
                    <input type="text" name="nome" />
                </label>
            </form>
        );
    }
}

export default InputTextComponent;