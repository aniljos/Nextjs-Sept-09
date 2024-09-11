import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";


type TestState = {
    message: String;
    count: number
}

const testInitState: TestState = {
    message: "Hello redux",
    count: 5
}
const testReducer =(state= testInitState, action: any)=>{

    if(action.type === 'increment_count'){
        
        const copy= {...state};
        copy.count++;
        return copy;

        
    }

    return state;
}

const combinedReducer = combineReducers({
    auth: authReducer,
    test: testReducer
})

//store
export const store = configureStore({
    reducer: combinedReducer
});



export type AppState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;