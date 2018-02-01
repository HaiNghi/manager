import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    LOGIN_USER, 
    EMPLOYEE_LIST,
    ADD_EMPLOYEE,
    EDIT_EMPLOYEE
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged=  (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text 
    };
};

export const passwordChanged= (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text 
    };
}

export const addEmployee = () => {
    return {
        type: ADD_EMPLOYEE
    }
}

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {loginUserSuccess(dispatch, user);
                        dispatch({ type: EMPLOYEE_LIST })})
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(user => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

}; 



