import React from "react";

// import react fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container opacity-0">
                    <a className="navbar-brand" href="#"><h1 className="golo"> <span style={{ color: "orangered" }}>Sk</span>yl<span style={{ color: "rgb(44, 204, 66)" }}>er</span> </h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon "></span> */}
                        <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="#home">Home <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#certificate">Certificates</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Me</a>
                            </li>


                        </ul>

                    </div>





                </div>
            </nav>

        </>
    )
}

export default Navbar
