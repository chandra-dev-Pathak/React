import './Footer.css'

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-content">

                <h3 className="footer-logo">MyLogo</h3>

                <ul className="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <div className="footer-socials">
                    <a href="#">🔗 FB</a>
                    <a href="#">🔗 IG</a>
                    <a href="#">🔗 TW</a>
                </div>

            </div>

            <p className="footer-copy">© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>

        </footer>

    )

}

export default Footer;