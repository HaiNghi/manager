import _ from 'lodash';
import React, {Component} from 'react';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import Communications from 'react-native-communications';


class EmployeeEdit extends Component{
    state = {modalShow: false};
    componentWillMount(){
        _.each(this.props.navigation.state.params.employee , (value, prop) => {
            this.props.employeeUpdate({prop, value});
        })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        console.log(name, phone, shift);
        this.props.employeeSave({name, phone, shift, uid: this.props.navigation.state.params.employee.uid});
    }

    onTextPress(){
        const { phone, shift} = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onAccept(){
        const { uid } = this.props.navigation.state.params.employee;
        this.setState({modalShow: false});
        this.props.employeeDelete({ uid });
        
    }

    onDecline(){
        this.setState({modalShow: false});
    }
    render(){
        return(
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)} >Text schedules
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({modalShow: !this.state.modalShow})} >Fire employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.modalShow}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) =>{
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);