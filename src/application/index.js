import Header from './header';
import Calculator from './body';
import { View } from 'react-native';
import React from 'react';
import { COLOR } from 'react-native-material-ui';
 
export const Application = () => {
    return (
        <View style={{backgroundColor: COLOR.teal900}}>
            <Header />
            <Calculator />
        </View>
    );
}
