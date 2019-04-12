import React from 'react';
import { View } from 'react-native';
import { Subheader } from 'react-native-material-ui';
import styles from './style';

const Header = () => { 
    return (
        <View>
            <Subheader style={{container: styles.container, text: styles.text}} text="Calculator1"/>
        </View>
    );
}

export default Header;