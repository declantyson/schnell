/*
 *
 *	Test View
 *	v0.0.1
 *	13/10/2016
 *  
 */

window.TestView = React.createClass({
    getInitialState: function() {
        return { data: [] };
    },
    api: "schema.json",
    getDataFromEndpoint: function() {
        $.ajax({
            url: this.api,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ data: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.leaguesApi, status, err.toString());
            }.bind(this)
        })
    },
    componentDidMount: function() {
        if(this.props.data.length === 0) {
            this.getDataFromEndpoint();
            setInterval(this.getDataFromEndpoint, this.props.pollInterval);
        }
    },
    render: function() {
        var data = this.props.data;
        if(data.length === 0) {
            data = this.state.data;
        }

        if(data.length === 0) return false;
        var testItems = data.testItems.map(function (i) {
            return (
                <TestItem text={i.text} />
            );
        });
        return ( 
            <div>
                <h2 className="testView">Test items</h2>
                {testItems}
            </div>
        );
    }
});

window.TestItem = React.createClass({
    render: function() {
        return (
            <p>{this.props.text}</p>
        )
    }
});