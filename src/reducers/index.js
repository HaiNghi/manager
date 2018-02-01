import { combineReducers } from 'redux';
import AuthReducer  from './AuthReducer';
import NavigationReducer from './NavigationReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    nav: NavigationReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});