import Footer from "@/component/footer";
import Link from "next/link";

export default function About(){
    return(
        <div className="about-container">
            <div className="about-image">
                <h3>ABOUT US</h3>
                <ul className="navbar2">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="About"><li>About us</li></Link>
                    <Link href="series"><li>Series</li></Link>
                    <Link href="/"><li>Contact Us</li></Link>
                </ul>
                
            </div>
            <div className="about-content">
                <h1 className="about-title">HRAnime.com - HRAnime - HRAnime.com</h1><br></br>
                <h2 className="about-title2">HRAnime.net - Watch Anime Online in Hindi Dub for FREE</h2>
                <p>In late 2023, realizing the scarcity of user-friendly platforms offering Hindi, Tamil, and Telugu-dubbed anime,<br></br>
                   we embarked on creating Animedekho. Our aim was to revolutionize the anime streaming experience, addressing the<br></br>
                    deficiencies prevalent on existing platforms. animedekho.net acts as an aggregator, indexing content available <br></br>
                    on other platforms. It's important to note that animedekho.net does not host any content; everything is sourced <br></br>
                    from third-party providers.We bear no responsibility for content hosted on external sites.</p><br></br>
                    
                    <h3 className="about-title3">1/ What's HRAnime?</h3>
                    <p>Anime dekho stands as a haven for anime enthusiasts, offering a diverse array of anime titles dubbed in Hindi, 
                        Tamil, and Telugu, all accessible for free in high-definition quality. Additionally,users have the option to 
                        download their favorite anime at no cost.</p><br></br>

                    <h3 className="about-title3">2/ Is HRAnime.net safe?</h3>
                    <p>Absolutely. Safety is paramount to us. We initiated this platform with the explicit goal of enhancing user experience while ensuring user safety. We encourage our users to promptly report any suspicious activities. However, please understand that advertisements are necessary for site maintenance.</p><br></br>

                    <h3 className="about-title3">3/ What makes hranime.net the best site to watch anime free online?</h3>
                    <p>- Extensive Content Library: Our platform boasts the largest collection of anime dubbed in Hindi, Tamil, and Telugu, catering to diverse preferences.</p>
                    <p>- Timely Updates: Leveraging automated indexing processes, we strive to provide the latest content promptly, ensuring you stay abreast of the newest releases.</p>
                    <p>- Intuitive User Interface: Prioritizing simplicity and ease of use, our platform offers a seamless browsing experience. We incorporate essential features while eschewing unnecessary complexities.</p> 
                    <p>- Device Compatibility: HRAnime seamlessly adapts to various devices, including desktops and mobiles, ensuring uninterrupted anime enjoyment regardless of your location.</p> 
                    <p>If you seek a reliable and secure platform for free anime streaming, give Animedekho a try. If you appreciate what we offer, spread the word to your friends and bookmark our site for future anime adventures.</p>
                    <p>Thank you for choosing HRAnime!</p>

                    <h2 className="about-title2">HRAnime.net does not store any files on own server, We only index links from internet which are hosted on third-party services. We Index Links Just Like Google.</h2>
            </div>
            <Footer/>
        </div>
    )
}