import React from 'react';
import race1 from "../images/race1.PNG";
import race2 from "../images/race2.PNG";



const Modal6 = () => {
    return (
        <>
            <div className="modal fade " id="myModal6">
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ width: "1000px" }} className="modal-content ">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">Restful API</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body ">
                            <div id="carouselExampleIndicator" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={race1} alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={race2} alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={race1} alt="Third slide" />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicator" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicator" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <h5>Private Project</h5>
                        <h5>About Project</h5>

                        <p> This is a RESTFUL API Project in which we can create our own RESTFUL API using POSTMAN
                            this project based on 100m race web app </p>

                        <hr />
                        <h5>Project Link</h5>
                        <a href="https://github.com/Shaileshverma9264/100mRaceusingRestfulApi/tree/main/mens100meter" target="_blank">https://github.com/Shaileshverma9264
                            /100mRaceusingRestfulApi
                            /tree/main/mens100meter</a>

                        <hr />
                        <h5>Technologies Used</h5>
                        <p>MongoDb,ExpressJs,POSTMAN</p>
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

export default Modal6
