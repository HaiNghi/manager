import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {Card, CardSection} from './common';
import {connect } from 'react-redux';
import {employeeEdit} from '../actions';

class EmployeeListItem extends Component{
    onRowPress(){
        // this.props.employeeCreate({employee: this.props.employee});
        this.props.employeeEdit({employee: this.props.employee});
    }
    render(){
        const {name} = this.props.employee;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection >
                        <Text style={styles.textStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default connect(null,{employeeEdit})(EmployeeListItem);