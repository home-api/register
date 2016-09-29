var Select = React.createClass({
    propTypes: {
        types: React.PropTypes.array.isRequired,
        emails: React.PropTypes.array.isRequired,
        typeIndex: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    handleOnChangeEvent: function (event) {
        var selectedTypeIndex = event.target.selectedIndex;
        this.props.onChange(selectedTypeIndex);
    },

    render: function () {
        var currentIndex = this.props.typeIndex;
        var types = this.props.types.map(function (type, index) {
            var selected = index == currentIndex ? ' selected ' : '';
            return <option value={type}>{type}</option>;
        });

        var emails = this.props.emails.join(' | ');
        return (
            <div>
                <select onChange={this.handleOnChangeEvent}>{types}</select>
                <div>{emails}</div>
            </div>);
    }
});

//module.exports = Select;
window.Select = Select;