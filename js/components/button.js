var Button = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },

    handleOnClickEvent: function (event) {
        var email = document.getElementById('user-email').value;
        console.log(email);
        this.props.onClick(email);
    },

    render: function () {
        return (
            <div>
                <div><input type="text" id="user-email"/></div>
                <button onClick={this.handleOnClickEvent} form="register">Register for event</button>
            </div>
        );
    }
});

window.Button = Button;