import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_LIST,
    EMPLOYEES_FETCH_SUCCESS,
    EDIT_EMPLOYEE
} from './types';
import firebase from 'firebase';


export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({name, phone, shift}) => {
    // console.log(name, phone, shift);
    const { currentUser } = firebase.auth();
    
    return (dispatch) =>{
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(()=> {
            dispatch({ type: EMPLOYEE_CREATE}),
            dispatch({ type: EMPLOYEE_LIST})
        });
    };
   
};

export const employeesFetch = () =>{
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value',snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            });
    }
};

export const employeeEdit = (employee) => {
    return {
        type: EDIT_EMPLOYEE,
        payload: employee
    }
}

export const employeeSave = ({name, phone, shift, uid}) => {
    const {currentUser}= firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({name, phone, shift})
        .then(()=> {
            dispatch({ type: EMPLOYEE_LIST});
        });
    }
}

export const employeeDelete = ({uid}) => {
    const {currentUser}= firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=> {
            dispatch({ type: EMPLOYEE_LIST});
        });
    }
}