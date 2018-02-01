import React, { Component} from 'react';
import { Card, CardSection, Input, Button} from './common';
import { employeeUpdate, employeeCreate, editEmployee } from '../actions';
import { connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends  Component{
    // static navigationOptions = ({navigation}) => {
    //     if(navigation.state.params!= null){
    //         return {
    //             headerTitle : 'Update employee'
    //         }
    //     }
    //     return {
    //         headerTitle: 'Add employee'
    //     }
           
    // }
    // static navigationOptions ={
    //     headerRight: (
    //         <Button
    //             title="Add"
    //             /* onPress={() => setParams({ mode: isInfo ? 'none' : 'info' })} */
    //         />
    //       ),
    // }
    onButtonPress(){
        const {name, phone, shift } =this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    // renderButton(){
    //     if(this.props.navigation.state.params!=null){
    //         return (
    //                 <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
    //         );
    //     }
    //     return (
    //         <Button onPress={this.onButtonPress.bind(this)} >Create</Button>
    //     );
    // }

    render(){
        // let name = this.props.name;
        // let phone =  this.props.phone;
        // let shift = this.props.shift;
        // let buttonName = "Create";
        
        // if(this.props.navigation.state.params!=null){
        //     const {employee} = this.props.navigation.state.params;
        //     name = employee.name;
        //     phone = employee.phone;
        //     shift = employee.shift;
        //     buttonName = "Save";
        //     this.props.navigation.state.params == null;
        // }
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >Create</Button>
                </CardSection>
            </Card>
        );
    };
}



const mapStateToProps = (state) =>{
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};

export default connect(mapStateToProps,{employeeUpdate, employeeCreate })(EmployeeCreate);