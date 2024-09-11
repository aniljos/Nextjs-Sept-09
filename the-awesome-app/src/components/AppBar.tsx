'use client'

// <AppBar title="React" mode="dark", routes={}/>

import { AppThemeContext } from "@/context/AppThemeContext";
import Link from "next/link";
import { useContext } from "react";

export type RouteItem = {
    label: string;
    path: string
}

type AppBarProps = {

    title: string;
    mode?: string;
    routes: RouteItem[]
}

const AppBar: React.FC<AppBarProps> = ({ title, mode, routes }) => {

    const themeState = useContext(AppThemeContext);
    const appMode = mode ? mode : themeState.mode;

    function changeTheme(){

        if(themeState.updateMode){
            themeState.updateMode(themeState.mode === 'dark'? 'light': 'dark');
        }
        
    }

    return (
        <nav className={`navbar navbar-${appMode} bg-${appMode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">{title}</Link>
                <ul className="nav">
                    {routes.map(route => {
                        return (
                            <li key={route.path} className="nav-item">
                                <Link className="nav-link " href={route.path}>{route.label}</Link>
                            </li>
                        )
                    })}
                    <li>
                        <button className="btn btn-warning" onClick={changeTheme}>Switch Theme</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default AppBar;