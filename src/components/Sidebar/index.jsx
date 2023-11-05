// import { Col, Row } from "react-bootstrap"
import "./style.css"

const Sidebar = () => {
    return(
        <div className="sidebar col-4 py-3" style={{ backgroundColor: '#FFF000' }}>
            <p>Home</p>
            <p>Service</p>
            <p>Product</p>
        </div>
    )
}

export default Sidebar