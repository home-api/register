import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClickEvent = this.handleOnClickEvent.bind(this);
    }

    handleOnClickEvent(event) {
        var email = this.refs.input.value;
        this.props.onClick(email);
    }

    render() {
        return (
            <div>
                <div><input type="text" id="user-email" ref="input"/></div>
                <button onClick={this.handleOnClickEvent} form="register">Register for event</button>
            </div>
        )
    }
}

Button.propTypes = {onClick: React.PropTypes.func.isRequired};

module.exports = Button;