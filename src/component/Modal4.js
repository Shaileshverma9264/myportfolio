import React from 'react';
import responsive1 from "../images/responsive1.PNG";
import responsive2 from "../images/responsive2.PNG";
import responsive3 from "../images/responsive3.PNG";


const Modal4 = () => {
    return (
        <>
            <div className="modal fade " id="myModal4">
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ width: "1000px" }} className="modal-content ">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Web App Business Portfolio</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body ">
                            <div id="carouselExampleContros" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 " src={responsive1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 " src={responsive2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100 " src={responsive3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleContros" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleContros" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <h5>Private Project</h5>
                        <h5>About Project</h5>

                        <p>This project is generally made for business portfolio. In this project we can only see their frontend pages how
                            to make a web app  project using react   </p>


                        <hr />
                        <h5>Project Link</h5>
                        <a href="https://github.com/Shaileshverma9264/Web_Project_Using_ReactJs" target="_blank">https://github.com/Shaileshverma9264
                            /Web_Project_Using_ReactJs</a>
                        <hr />
                        <h5>Technologies Used</h5>
                        <p>React.Js,Html5,Css,bootstrap</p>
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

export default Modal4
