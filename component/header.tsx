import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <div><h1 className="logo"><span>HR</span>ANIME</h1></div>
            <ul className="navbar">
                <Link href={"/"} className="active"><li>Home</li></Link>
                <Link href="About"><li>About us</li></Link>
                <Link href="series"><li>Series</li></Link>
                <Link href="contact"><li>Contact us</li></Link>
                <Link href="singin"><li className="log">Login</li></Link>
            </ul>
        </div>
    )
}