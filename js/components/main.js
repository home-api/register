var request = new XMLHttpRequest();
request.onload = onDataLoadedListener;
request.open("get", "data.json", true);
request.send();

var data;
function onDataLoadedListener() {
    data = JSON.parse(this.responseText);
    initializeComponent();
}

function initializeComponent() {
    var Button = React.createClass({
        getInitialState: function () {
            return {
                data: this.props.data.events.map(function (event) {
                    return event;
                }),
                typeIndex: 0,
            }
        },

        updateCurrentType: function (typeIndex) {
            this.setState({typeIndex: typeIndex});
        },

        clickHandler: function (email) {
            this.state.data[this.state.typeIndex].emails.push(email);
            this.setState({data: this.state.data});
            // data has to be save to the file bun doesn't have access to the file system
        },

        render: function () {
            var eventsList = [];
            this.state.data.map(function (event) {
                eventsList.push(event.type);
            });

            var registeredUsers = this.state.data[this.state.typeIndex].emails;

            return (
                <form name="register">
                    <window.Select
                        types={eventsList}
                        emails={registeredUsers}
                        typeIndex={this.state.typeIndex}
                        onChange={this.updateCurrentType}/>
                    <window.Button onClick={this.clickHandler}/>
                </form>
            );
        }
    });

    ReactDOM.render(<Button data={data}/>, document.getElementById('app'));
}