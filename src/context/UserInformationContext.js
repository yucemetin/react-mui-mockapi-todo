import { createContext, useContext, useReducer } from "react";
import userReducer from "../reducer/userInformationReducer"

const Context = createContext()

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, {
        userName: localStorage.getItem("user-name") || "User",
        avatar: localStorage.getItem("avatar") || "resim koy"
    })

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

export const useUser = () => useContext(Context)

export default Provider