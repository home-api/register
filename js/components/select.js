import React from "react";

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChangeEvent = this.handleOnChangeEvent.bind(this);
    }

    handleOnChangeEvent(event) {
        var selectedType = event.target.value;
        this.props.onChange(selectedType);
    }

    render() {
        var types = this.props.types.map(function (type, index) {
            return <option value={type} key={index}>{type}</option>;
        });

        var emails = this.props.emails.join(' | ');
        return (
            <div>
                <select onChange={this.handleOnChangeEvent} value={this.props.selectedType}>{types}</select>
                <div>{emails}</div>
            </div>);
    }
}

Select.propTypes = {
    types: React.PropTypes.array.isRequired,
    emails: React.PropTypes.array.isRequired,
    selectedType: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};

module.exports = Select;