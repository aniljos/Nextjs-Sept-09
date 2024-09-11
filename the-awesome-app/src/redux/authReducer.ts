
export type AuthState = {
    isAuthenticated: boolean
    name: string;
    accessToken: string;
    refreshToken: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    name: "",
    accessToken: "",
    refreshToken: ""
}


//reducer is a function
export const authReducer = (currentState=initialState, action: any): AuthState => {

    if(action.type === "set_auth"){
        return {
            isAuthenticated: action.payload.isAuthenticated,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
            name: action.payload.name,
        }
    }

    if(action.type === "logout"){
        return initialState
    }

    //return the updated state
    return currentState
}