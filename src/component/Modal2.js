import React from 'react'
import todo from "../images/todo.PNG";

const Modal2 = () => {
    return (
        <>
            <div className="modal fade  " id="myModal2">
                <div className="modal-dialog modal-dialog-centered">
                    <div style={{ width: "1000px" }} className="modal-content ">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header text-center">
                            <h4 className="modal-title ">TO DO APP</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <div id="carouselExampleContro" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100 " src={todo} alt="First slide" />
                                    </div>
                                    <div className="carousel-item ">
                                        <img className="d-block w-100" src={todo} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item ">
                                        <img className="d-block w-100" src={todo} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleContro" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleContro" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                        <h5>Private Project</h5>
                        <h5>About Project</h5>

                        <p>  This is a to do app project . It is used to notedown our daily uses things. This helps us to remember
                            our work routine and things also</p>
                        <hr />
                        <h5>Project Link</h5>
                        <a href="https://github.com/Shaileshverma9264/TodoList_App_Using_MaterialUi_inReact" target="_blank">https://github.com/Shaileshverma9264/
                            TodoList_App_Using_MaterialUi_inReact</a>
                        <hr />
                        <h6>Technologies Used</h6>
                        <p>ReactJs,Javascript,bootstrap4,html5,css</p>
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

export default Modal2
