import React from 'react';
import { Text, TextInput, View } from 'react-native';

export class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          onChangeText={(text) => this.setState({text})}
          value={this.props.value}
        />
      </View>
    );
  }
}