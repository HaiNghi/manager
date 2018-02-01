import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" tabs>
                <Scene key="login" component={LoginForm} title="Please login"/>
                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" hideTabBar onRight={() =>console.log('OK!!')} rightTile="add" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;