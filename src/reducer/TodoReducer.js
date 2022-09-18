export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo: {
                    id: Math.floor(Math.random() * 246848624524),
                    content: action.value
                }
            }

        case "REMOVE_TODO":
            return {
                ...state,
                todos: action.todos
            }

        case "UPDATE_TODO":
            return {
                state
            }

        case "GET_TODOS":
            return {
                state
            }

        case "ADD_TODO_TO_TODOS":
            return {
                ...state,
                todo: {
                    content: ''
                },
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }


        default:
            return state
    }
}