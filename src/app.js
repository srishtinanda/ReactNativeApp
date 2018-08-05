import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux-framework/reducers';
import { Application } from './application';

const App = () => {
    return (
        <Provider store = {createStore(reducers)}> 
           <Application />
       </Provider>
    );
}

export default App;