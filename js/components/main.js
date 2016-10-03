import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import Select from "./select";

fetch("data.json").then(function (response) {
    response.json().then(function (content) {
        onDataLoaded(content);
    });
});

function onDataLoaded(content) {
    initializeComponent(content);
}

function initializeComponent(data) {
    class Main extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: props.data.events.reduce(function (object, event) {
                    object[event.type.toString()] = event.emails;
                    return object;
                }, {}),
                selectedType: 'Football'
            };

            this.clickHandler = this.clickHandler.bind(this);
            this.updateCurrentType = this.updateCurrentType.bind(this);
        }

        updateCurrentType(selectedType) {
            this.setState({selectedType: selectedType});
        }

        clickHandler(email) {
            this.state.data[this.state.selectedType].emails.push(email);
            this.setState({data: this.state.data});
        }

        render() {
            var eventsList = [];
            for (var type in this.state.data) {
                if (this.state.data.hasOwnProperty(type)) {
                    eventsList.push(type);
                }
            }

            var registeredUsers = this.state.data[this.state.selectedType];

            return (
                <form name="register">
                    <Select
                        types={eventsList}
                        emails={registeredUsers}
                        selectedType={this.state.selectedType}
                        onChange={this.updateCurrentType}/>
                    <Button onClick={this.clickHandler}/>
                </form>
            );
        }
    }

    ReactDOM.render(<Main data={data}/>, document.getElementById('app'));
}