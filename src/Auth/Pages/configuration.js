import React, { Component } from 'react'
import {
    Text,
    View
}
    from 'react-native'

export default class configuration extends Component {
    render() {
        return (
            <View>
                <Text onPress={() => this.props.navigation.toggleDrawer()}> Esta es la configuracion </Text>

            </View>
        )
    }
}