import React, { useState, useReducer } from "react";


const initialState =
{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}
export default reducer = (state = initialState, action) => {
    // switch (action.type) {
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
    //     default:
    //         throw new Error();
    // }
    return { ...state };
}