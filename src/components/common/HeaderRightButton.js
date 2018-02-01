import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import { connect } from 'react-redux';
import {addEmployee} from '../../actions';
import {StackNavigator, TabNavigator} from 'react-navigation';

class HeaderRightButton extends Component{
    onButtonRightPress(){
        switch (this.props.functionName){
            case 'addEmployee': this.props.addEmployee();
            break;
        }
    }
    render(){
        return(
            <View>
                <Button title={this.props.title} onPress={this.onButtonRightPress.bind(this)}/>
            </View>
        );
    }
}


const styles= {
  
    viewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'
        

    }
}

export default connect(null, {addEmployee})(HeaderRightButton);
