import React, { useState, useReducer } from "react";


export const initialState = {
    // tasks: [
    //     {
    //         item: 'Learn about reducers',
    //         completed: false,
    //         id: 3892987589
    //     },
    //     {
    //         item: 'Add reducers to store or something',
    //         completed: false,
    //         id: 3892987587
    //     }
    // ]
};
export const reducer = (state, action) => {
    switch (action.type) {
        //     case 'ADD_TODO':
        //         return {
        //     ...state,
        //     tast: action.payload
        // };
        //     case 'REMOVE_TODO':
        //         return {
        //     ...state,
        //     tast: action.payload
        // };
        default:
            return state;
    }
}