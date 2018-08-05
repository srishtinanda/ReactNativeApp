import { Card } from 'react-native-material-ui';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export class SimpleCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Card style = {{container: styles.container}}>
                   {this.props.children}
                </Card>
            </View>
        );
    }
}