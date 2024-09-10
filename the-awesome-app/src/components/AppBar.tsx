// <AppBar title="React" mode="dark", routes={}/>

import Link from "next/link";

export type RouteItem = {
    label: string;
    path: string
}

type AppBarProps = {

    title: string;
    mode?: string;
    routes: RouteItem[]
}

const AppBar: React.FC<AppBarProps> = ({ title, mode="dark", routes }) => {

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
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
                </ul>
            </div>
        </nav>
    )
}
export default AppBar;