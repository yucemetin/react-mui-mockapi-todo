import { createContext, useContext, useEffect, useReducer, useState } from "react";
import todoReducer from "../reducer/TodoReducer"

const Context = createContext()

const Provider = ({ children }) => {

    const getDatas = () => {
        return fetch('https://631290d8b466aa9b038bad58.mockapi.io/todos')
            .then(response => response.json())
            .then(data => {
                return data
            })
    }

    const [state, dispatch] = useReducer(todoReducer, {
        todos: getDatas(),
        todo: {
            id: Math.floor(Math.random() * 516542652465246),
            content: "",
            isCompleted: false
        }
    })

    useEffect(() => {
        fetch('https://631290d8b466aa9b038bad58.mockapi.io/todos', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state.todos)

        }).then(resp => console.log(resp.ok))
    }, [state.todos])


    const data = {
        ...state,
        dispatch
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useTodo = () => useContext(Context)

export default Provider