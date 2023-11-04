// import React from "react";
// import { Row } from "react-bootstrap"
import "./style.css"

const Navbar = () => {
    return(
        <div className="navbar-wrapper py-3 container">
            <div className="navbar">
                <h3>Embrace</h3>
                <div className="nav-links">
                    <p>How it Works</p>
                    <p>How it Works</p>
                    <p>How it Works</p>
                    <p>How it Works</p>
                </div>
                <div>
                    <button className="btn btn-primary">book a call</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;