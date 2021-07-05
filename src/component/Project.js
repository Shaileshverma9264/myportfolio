import React from 'react';




import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';
import Modal5 from './Modal5';
import Modal6 from './Modal6';



const Project = () => {
    return (
        <>
            <div id="project">
                <h1 className="text-center text-capitalize mt-5 mb-5"><span style={{ color: "orangered" }}> Projects</span> </h1>
                <hr className=" mx-auto w-25 mb-2 " />
            </div>
            <div className="col-md-12 col-12 mx-auto mb-5">
                <section className="container">
                    <div className="card_outer">
                        <div className="card">
                            <div className="content">
                                <h2 style={{ color: "orangered" }} className="title">Weather App  </h2>
                                <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn text-primary" data-toggle="modal" data-target="#myModal1">Read More</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 style={{ color: "orangered" }} className="title">To Do App</h2>
                                <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn text-primary " data-toggle="modal" data-target="#myModal2">Read More</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 style={{ color: "orangered" }} className="title">Netflix Project</h2>
                                <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn text-primary" data-toggle="modal" data-target="#myModal3">Read More</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 style={{ color: "orangered" }} className="title">Web App </h2>
                                <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn text-primary" data-toggle="modal" data-target="#myModal4">Read More</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 style={{ color: "orangered" }} className="title">Auth Web App</h2>
                                <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn text-primary" data-toggle="modal" data-target="#myModal5">Read More</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="content">
                                <h2 style={{ color: "orangered" }} className="title">100m Race</h2>
                                <p className="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <button className="btn text-primary" data-toggle="modal" data-target="#myModal6">Read More</button>
                            </div>
                        </div>

                    </div>



                </section>
            </div>



            <Modal1 />
            <Modal2 />
            <Modal3 />
            <Modal4 />
            <Modal5 />
            <Modal6 />

        </>
    )
}

export default Project
