import React from 'react';
import netflix from "../images/netflix.PNG";
import netflix2 from "../images/netflix2.PNG";

const Modal3 = () => {
    return (
        <>
            <div className="modal fade " id="myModal3">
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ width: "1000px" }} className="modal-content ">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Netflix Series Card </h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <div id="carouselExampleControle" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 " src={netflix} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={netflix} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={netflix2} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControle" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControle" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <h5>Private Project</h5>
                        <h5>About Project</h5>

                        <p> This project is a mini project which is used as netflix card. In this project when we want to
                            watch movie then you can redirect to this particular movie page</p>
                        <hr />
                        <h5>Project Link</h5>
                        <a href="https://github.com/Shaileshverma9264/Netflix_Card_Project_Using_React" target="_blank">https://github.com/Shaileshverma9264/
                            Netflix_Card_Project_Using_React</a>
                        <hr />
                        <h5>Technologies Used</h5>
                        <p>ReactJs, html,css</p>
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

export default Modal3
