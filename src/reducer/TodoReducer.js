export default function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            const todo = {
                id: Math.floor(Math.random() * 2848648498484),
                content: action.value,
                isCompleted: false
            }
            fetch('https://631290d8b466aa9b038bad58.mockapi.io/todos', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(todo)
            })

            return {
                ...state,
                todo: todo
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
            const getDatas = async () => {
                const response = await fetch('https://631290d8b466aa9b038bad58.mockapi.io/todos');
                const data = await response.json();
                return data;
            }
            console.log("reducer")
            const todos = []
            const datas = getDatas()
            datas.then(data => [...data].map(i => {
                todos.push(i);
            }))

            return {
                todos: todos
            }

        case "ADD_TODO_TO_TODOS":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }

        default:
            return state
    }
}