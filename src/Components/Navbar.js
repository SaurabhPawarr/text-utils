import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === "dark" ? "rgb(21,32,43,1)" : "rgb(193, 206, 209)" }}>
            <div className="container-fluid">
                <a className="navbar-brand " href="/" style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.title}</a>
                <button className="navbar-toggler" style={{ backgroundColor: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                        <li className="nav-item" >
                            <a className="nav-link active " style={{ color: props.mode === "dark" ? "white" : "black" }} aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                     {/*   <li className="nav-item">
                            <a className="nav-link " style={{ color: props.mode === "dark" ? "white" : "black" }} href="/">{props.about}</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle " style={{ color: props.mode === "dark" ? "white" : "black" }} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" style={{ backgroundColor: props.mode === "dark" ? "rgb(21,32,43,1)":"white"}}>
                                <li><a className="dropdown-item" style={{ color: props.mode === "dark" ? "white" : "black" }} href="/">Action</a></li>
                                <li><a className="dropdown-item" style={{ color: props.mode === "dark" ? "white" : "black" }} href="/">Another action</a></li>
                            </ul>
                        </li>
                    </ul>
                     <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-secondary" type="submit">Search</button>
                    </form> */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" style={{ color: props.mode === "dark" ? "white" : "black" }} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Text Utils",
    about: "About"
}