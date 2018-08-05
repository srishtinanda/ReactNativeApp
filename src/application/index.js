import Header from './header';
import Calculator from './body';
import { View } from 'react-native';
import React from 'react';
 
export const Application = () => {
    return (
        <View>
            <Header />
            <Calculator />
        </View>
    );
}
