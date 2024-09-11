
export type AuthState = {
    isAuthenticated: boolean
    name: string;
    accessToken: string;
    refershToken: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    name: "",
    accessToken: "",
    refershToken: ""
}


//reducer is a function
export const authReducer = (currentState=initialState, action: any) => {

    //return the updated state
    return currentState
}