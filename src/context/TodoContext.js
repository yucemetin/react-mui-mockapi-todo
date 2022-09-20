import { createContext, useContext, useEffect, useReducer, memo } from "react";
import todoReducer from "../reducer/TodoReducer"

const Context = createContext()

const Provider = ({ children }) => {
    useEffect(() => {
        console.log("effect")
        dispatch({
            type: "GET_TODOS"
        })
    }, [])

    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: {
            id: 0,
            content: "xx",
            isCompleted: false
        }
    })

    useEffect(() => {
        console.log("effect2")
        dispatch({
            type: "GET_TODOS"
        })
    }, [state.todo])

    console.log("contexts")

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

export default memo(Provider)