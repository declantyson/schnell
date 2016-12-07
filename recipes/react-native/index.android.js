/*
 *
 *  NewApp/Android
 *  Declan Tyson
 *  v0.0.1
 *  07/12/2016
 *
 */

import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
import {
    AppRegistry,
    Dimensions,
    Text,
    View,
    ScrollView
} from 'react-native';

import { styles } from './js/styles/styles.android';
import dateUtilities from './js/utilities/date'

export default class app extends Component {
    constructor(props) {
        super(props);
    }

    _onMomentumScrollEnd(e, state, context) {
        // Do something here...
    }

    render() {
        return (
            <Swiper
            loop={true}
            showsPagination={false}
            onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
            index={1}>
                <View style={styles.container}>
                    <Text>Slide 1</Text>
                </View>
                <View style={styles.container}>
                    <Text>Slide 2</Text>
                </View>
                <View style={styles.container}>
                    <Text>Slide 3</Text>
                </View>
            </Swiper>
        );
    }
}

AppRegistry.registerComponent('app', () => app);
