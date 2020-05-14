
export const initialState = {
    tasks: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            task: 'Add reducers to store or something',
            completed: false,
            id: 3892987587
        }
    ]
};
export const reducer = (state, action) => {
    console.log('in red', action.payload);
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [
                    {
                        task: action.payload,
                        completed: false,
                        id: Date.now()
                    },
                    ...state.tasks
                ]
            };
        default:
            return state;
        }
    }
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
                // default:
                //     return state;