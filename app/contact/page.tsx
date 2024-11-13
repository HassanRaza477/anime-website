import Footer from "@/component/footer"
import Link from "next/link"

export default function Contact(){
    return(
        <>
         <div className="about-image">
         <h2 className="heading">Contact<span>Us</span></h2>
                <ul className="navbar2">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="About"><li>About us</li></Link>
                    <Link href="series"><li>Series</li></Link>
                    <Link href="contact"><li>Contact Us</li></Link>
                </ul>
                </div>
        <div className="contact">
            <form action="#">
            <div className="input-box">
                <input type="text" placeholder="Full Name"></input>
                <input type="email" placeholder="Email"></input>
            </div>
            <div className="input-box">
                <input type="number" placeholder="Phone number"></input>
                <input type="text" placeholder="Subject"></input>
            </div>
            <textarea cols={30} rows={10} placeholder="your Message"></textarea>
            <input type="submit" value={"Send Message"} className="btn1"></input>
            </form>
            <Footer/>
        </div>
        </>
    )
}