// import React from 'react';
import { submit } from 'redux-form'

export const actionButtonSubmit = (formId) => {
    return (dispatch) => {
        dispatch(submit(formId));
    };
};