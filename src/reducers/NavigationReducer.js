import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';
import { EMPLOYEE_LIST, ADD_EMPLOYEE, EDIT_EMPLOYEE } from '../actions/types';

const loginNavAction = AppNavigator.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigator.router.getStateForAction(
    loginNavAction
);

export default (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case EMPLOYEE_LIST:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'EmployeeList' }),
                state
            );
            break;
        case ADD_EMPLOYEE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'EmployeeCreate' }),
                state
            );
            break;

        case EDIT_EMPLOYEE:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'EmployeeEdit' , params: action.payload}),
                state
            );
            break;
                  
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

