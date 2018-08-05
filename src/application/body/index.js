import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './style';
import { SimpleCard as Card } from '../../components/card';
import { Keys } from '../../components/button';
import { TextBox as InputBox } from '../../components/inputBox';
import {
    userTypedInput,
    calculateResult,
    clearInputString,
    deleteLastChar,
    calculateInput
} from '../../redux-framework/actions';
import { connect } from 'react-redux';

const CALCULATOR_KEYS = [[1, 2, 3], [4, 5,
    6], [7, 8, 9], [0, "+", "-"], ["*", "/", "="]];

const FUNCTIONAL_KEYS = ["Clear", "Delete"];

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <ScrollView>
          <Card>
            <Card>
              <InputBox value={this.props.input} />
            </Card>
            <Card>
              <InputBox placeholder="Result"
                value={this.props.result} />
            </Card>
            <Card>
                {this.functional}
                {this.content}
            </Card>
          </Card>
        </ScrollView>
      );
    }

    content = CALCULATOR_KEYS.map((key) => {
      return (
        <View style={styles.eachRow}>
          {key.map((item) => {
            return (
              <View style={styles.eachColumn} >
                <Keys text={item.toString()}
                  onAction={(item) => {
                    (item !== '=') ?
                    this.handleKeyPress(item) :
                    this.handleKeyOperation(item)
                  }}
                />
              </View>);
            })
          }
        </View>);
    })

    functional = FUNCTIONAL_KEYS.map((item) => {
      return (
        <View style={styles.keyPad}>
          <Keys text={item}
            onAction={(item) => {
              (item == 'Clear') ?
              this.handleClear() :
              this.handleDelete()
            }}
          />
        </View>)
    })

    handleKeyPress = (item) => {
        return this.props.selectedValue(item);
    }

    handleKeyOperation = (item) => {
        return this.props.calculation(item);
    }

    handleClear = () => {
        return this.props.clear();
    }

    handleDelete = () => {
        return this.props.delete();
    }
}

const mapStateToProps = state => {
    return {
        input: state.userInput.inputString,
        result: state.userInput.result
    };
}

const mapDispatchToProps = dispatch => {
    return {
        selectedValue: (item) => dispatch(userTypedInput(item)),
        calculate: (item) => dispatch(calculateInput(item)),
        calculation: (item) => dispatch(calculateResult(item)),
        clear: () => dispatch(clearInputString()),
        delete: () => dispatch(deleteLastChar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);