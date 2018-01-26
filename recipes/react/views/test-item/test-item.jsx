/*
 *
 *	Test Item
 *	v0.3.0
 *	26/01/2018
 *  
 */

import React from 'react';

class TestItem extends React.Component {
    render() {
        return ( 
            <p>{this.props.text}</p>
        );
    }
}


module.exports = {
    TestItem
};

window['TestItem'] = TestItem;