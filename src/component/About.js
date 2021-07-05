import React from 'react';
import myimg from "../images/myimg.jpeg";


const About = () => {
    return (
        <>
            <div>
                <h1 class="text-center text-capitalize mt-5 mb-5"><span style={{ color: "orangered" }}>About Me</span> </h1>
                <hr className=" mx-auto w-25 mb-2 " />

            </div>

            <div id="about" className="container-fluid mx-auto  ">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">

                            <div className="col-md-6 col-12 main_header_right ">
                                <figure>
                                    <img className="img_fluider w-75 rounded-circle img-fluid " src={myimg}
                                        alt="Skyler" srcset="" />
                                    <h1 style={{ color: "palegreen" }} className="text-center">SHAILESH VERMA</h1>
                                    <h6 className="text-center">I am a FullStack Developer</h6>
                                </figure>
                            </div>
                            <div className="col-md-6 col-12 pt-3 mt-3 text-center main_header_left">
                                <h1 style={{ color: "green" }}>Welcome to my world</h1>
                                <h6>Hi! myself <span style={{ color: "orangered" }}>Shailesh Verma</span>. I am pursuing my Under-graduation in Information Technology from Babu Banarasi Das Engineering College . I am a Full Stack Web Developer .I love to know about technologies and pretty much excited to learn new things of modern technical world .MY greatest strength is my positive attitude , even during the most hardest of times.
                                    I’m constantly Practicing New Technologies .</h6>
                                <h3 className="text-capitalize">get the latest news  <strong className="text-primary"> about</strong> me
                                </h3>
                                <a href=""> <button className="btn btn-outline-dark"> <a style={{ textDecoration: "none" }} href="https://github.com/Shaileshverma9264" target="_blank"> check here </a></button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default About
