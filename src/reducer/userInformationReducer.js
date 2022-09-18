export default function reducer(state, action) {
    switch (action.type) {
        case "SET_USER_INFO":
            localStorage.setItem("user-name", action.userName)
            localStorage.setItem("avatar", action.avatar)
            return {
                ...state,
                userName: localStorage.getItem("user-name"),
                avatar: localStorage.getItem("avatar")
            }

        default:
            return state
    }
}