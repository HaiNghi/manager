import _ from 'lodash';
import React, { Component} from 'react';
import { View, Text, Button, ListView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import HeaderRightButton from './common/HeaderRightButton';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends  Component{
    componentWillMount(){
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        //nextProps are the next set of props that this component will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);

    }

    createDataSource({ employees }) {
        const ds= new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        });

        this.DataSource = ds.cloneWithRows(employees);
    }

    static navigationOptions = {
        title:'Employee List',
        headerRight: <HeaderRightButton title="Add" functionName="addEmployee"/>
    }
    
    renderRow(employee){
        return <EmployeeListItem employee={employee}/>
    }

    render(){
        return (
            <ListView 
                enableEmptySections
                dataSource = {this.DataSource}
                renderRow = {this.renderRow}
            />
        );
    };
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid};
    });
    return {employees};
};

export default connect(mapStateToProps,{employeesFetch})(EmployeeList);