import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';
import EmployeeEdit from '../components/EmployeeEdit';
import {Button} from 'react-native';

export const AppNavigator = StackNavigator({
    Login: { 
        screen: LoginForm,
        navigationOptions: {
            title: "Login",
            headerLeft: null,
            headerBackTitle: null
        } 
    },
    EmployeeList: {
        screen: EmployeeList,
        navigationOptions: {   
            headerLeft: null,         
            title: 'Employee List',  
            // headerRight: <Button title="Info" />        
        }
    },
    EmployeeCreate: {
        screen: EmployeeCreate,
        navigationOptions: {          
            title: 'Add Employee',            
        }
    },
    EmployeeEdit: {
        screen: EmployeeEdit,
        navigationOptions: {          
            title: 'Edit Employee',            
        }
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});
  
export default connect(mapStateToProps)(AppWithNavigationState);
