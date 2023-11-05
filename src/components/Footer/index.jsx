import "./style.css"

const Footer = () => {
    return(
        <div className="footer-wrapper align-items-center justify-content-center" style={{ marginTop: '15rem' }}>
            <div className="footer py-5 container">
                <p>&copy; 2022 Embrace - All Rights Reserved</p>
                <div className="f-right ms-auto gap-3">
                    <p>Terms of use</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;