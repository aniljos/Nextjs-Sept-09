import Link from "next/link";

export default function AppPageNotFound(){

    return (
        <div className="alert alert-info">
            The requested page is currently not available.
            <br/>
            <Link href="/">Home</Link>
        </div>
    )
}