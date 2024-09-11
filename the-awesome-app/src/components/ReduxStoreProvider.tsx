'use client'

import { store } from "@/redux/store"
import { Provider } from "react-redux"



export default function ReduxStoreProvider(props: {children : Readonly<React.ReactNode>}){

    return (
        <Provider store={store}>
              {props.children}
        </Provider>
    )

}