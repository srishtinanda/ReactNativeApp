import { Button } from 'react-native-material-ui';
import React from 'react';
import { View } from 'react-native';
import styles from './style';

export class Keys extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button 
                style={{container: styles.container, text: styles.text}}
                text={this.props.text}
                raised={true}
                primary={true}
                onPress={this.props.onAction}
                />
        );
    }
}
