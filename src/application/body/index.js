import React from 'react';
import { ScrollView, View , Text} from 'react-native';
import styles from './style';
import { SimpleCard as Card} from '../../components/card';
import { Keys } from '../../components/button';
import { Col, Row, Grid } from "react-native-easy-grid";
import { TextBox as InputBox } from '../../components/inputBox';
import { 
    userTypedInput,
    calculateResult,
    clearInputString,
    deleteLastChar,
    calculateInput
 } from '../../redux-framework/actions';
import { connect } from 'react-redux';

const CALCULATOR_KEYS = [[1, 2, 3],[4, 5,
6],[7, 8, 9],[0, "+", "-"],["*", "/","="]];

const FUNCTIONAL_KEYS = ["Clear","Del"];

const regExp = /^([^0-9]*)$/

class Calculator extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
    const checkFirstOperation = regExp.test(this.props.input) ?
        this.props.calculate(this.props.input) : undefined;
    return (
            <ScrollView>
                <Card>
                <InputBox value={this.props.input}/>
                <InputBox value={this.props.result}/>
                {this.functional}
                    {this.content}
                </Card>
            </ScrollView>
        );
    }
    
    content = CALCULATOR_KEYS.map((key) => {
      return key.map((item) => {
          <View style={styles.row}/>
            return (
                <View style={styles.col}>
                    <Keys text={item.toString()}
                        onAction={(item) => {(item !== '=') ?
                        this.handleKeyPress(item) :
                        this.handleKeyOperation(item)}}
                    /> 
                </View>
            );
        })
    });

    functional = FUNCTIONAL_KEYS.map((item) => {
        return (
            <Keys text={item}
            onAction={(item) => {(item == 'Clear') ?
            this.handleClear() :
            this.handleDelete()}}
        /> 
        )
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