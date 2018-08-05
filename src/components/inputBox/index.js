import React from 'react';
import { Text, TextInput, View, Keyboard } from 'react-native';
import styles from './style';

export class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.text}
          placeholder={this.props.placeholder}
          editable={false}
          onChangeText={(text) => this.setState({text})}
          value={this.props.value}
        />
      </View>
    );
  }
}
