import React from 'react';
import men1 from "../images/men1.PNG";
import men2 from "../images/men2.PNG";
import men3 from "../images/men3.PNG";
import men4 from "../images/men4.PNG";
import men5 from "../images/men5.PNG";
import men6 from "../images/men6.PNG";


const Modal5 = () => {
    return (
        <>
            <div className="modal fade " id="myModal5">
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ width: "1000px" }} className="modal-content ">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Authentication Web App</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body ">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={men1} alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={men2} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={men3} alt="Third slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={men4} alt="Third slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={men5} alt="Third slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={men6} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <h5>Private Project</h5>
                        <h5>About Project</h5>

                        <p>It is a Authentication web app project in which we can see that when user register then generate its token
                            and cookies which stores within time duration which i provide.After registration when user visit our secret
                            page then he must be login otherwise gives error message
                        </p>

                        <hr />
                        <h5>Project Link</h5>
                        <a href="https://github.com/Shaileshverma9264/Authentication_WebApp_using_NodeExpressMongodbandAuth" target="_blank">https://github.com/Shaileshverma9264/
                            Authentication_WebApp_using
                            _NodeExpressMongodbandAuth</a>
                        <hr />
                        <h5>Technologies Used</h5>
                        <p>NodeJs,ExpressJs,MongoDb(MongoDb Atlas),Html5,Css,bootstrap</p>
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

export default Modal5
