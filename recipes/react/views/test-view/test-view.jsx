/*
 *
 *	Test View
 *	v0.3.0
 *	26/01/2018
 *  
 */

import React from 'react';
import './test-view.scss';

class TestView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    getDataFromEndpoint(self) {
        fetch(self.props.api).then(function(response) {
            return response.json().then(function(data) {
                self.setState({ data: data });
            });
        }).catch(function (err) {
            console.error(self.api, err.toString());
        });
    }

    componentDidMount() {
        let self = this;
        if(self.props.data.length === 0 || self.props.api !== "") {
            self.getDataFromEndpoint(self);
            setInterval(() => {
                self.getDataFromEndpoint(self);
            }, self.props.pollInterval);
        }
        mountedComponents++;
        if(mountedComponents >= document.getElementsByClassName('component').length) {
            renderComplete();
        }
    }

    render() {
        let data = this.props.data;
        if(data.length === 0 || this.props.api !== "") {
            data = this.state.data;
        }

        if(data.length === 0) return false;
        let testItemIndex = -1,
            testItems = data.testItems.map(function (i) {
                testItemIndex++;
                return (
                    <TestItem text={i.text} key={testItemIndex}/>
                );
            });
        return ( 
            <div>
                <h2 className="testView">Test items</h2>
                {testItems}
            </div>
        );
    }
}

module.exports = {
    TestView
};

window['TestView'] = TestView;