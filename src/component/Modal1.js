import React from 'react';
import weatherexp from "../images/weathercar.PNG";


const Modal1 = () => {
    return (
        <>
            <div className="modal fade " id="myModal1">
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ width: "1000px" }} className="modal-content ">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Weather App</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body ">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 " src={weatherexp} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 " src={weatherexp} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 " src={weatherexp} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <div className="head-container">
                            <h5>Private Project</h5>
                            <h5>About Project</h5>

                            <p>  This project is for the general knowledge  of Temperature . In this weather app we can search by its city name and get the temp
                                Information about that particular city and from  this temp app we also get the information like min temp and max temp</p>

                            <hr />
                            <h5>Project Link</h5>
                            <a href="https://github.com/Shaileshverma9264/reactjs_weatherapp" target="_blank" >https://github.com/Shaileshverma9264
                                /reactjs_weatherapp</a>
                            <hr />
                            <h5>Technologies Used</h5>
                            <p>React.Js,Html5,Css,bootstrap</p>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal1
