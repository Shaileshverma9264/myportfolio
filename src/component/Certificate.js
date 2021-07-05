import React from 'react';
import Certificatestep from './Certificatestep';
import developing from "../images/Developing.jpg";
import Emotional from "../images/Emotional.jpg";
import Enhancing from "../images/Enhancing.jpg";
import react from "../images/react.jpeg";
import aws from "../images/aws.jpg"
import javascript from "../images/javascript.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Certificate = () => {
    return (
        <>

            <div id="certificate">
                <h1 className="text-center text-capitalize mt-5 mb-5"><span style={{ color: "orangered" }}>Certificates</span> </h1>
                <hr className=" mx-auto w-25 mb-2 " />
            </div>
            <div className="cardition">
                <div className="cardo">
                    <h5 className="cardo-title">DEVELOPING SOFT SKILL</h5>
                    <img className="thumbnail" src={developing} alt="certificate" />

                    <p className=" mt-5 pt-5 cardo-desc">This certificate is got from NPTEL Course
                        completion <br />
                        .</p>
                </div>
                <div className="cardo">
                    <h5 className="cardo-title">EMOTIONAL INTELLI..</h5>
                    <img className="thumbnail" src={Emotional} alt="certificate" />

                    <p className=" mt-5 pt-5 cardo-desc">This certificate is got from NPTEL Course
                        completion <br />
                        .</p>
                </div>
                <div className="cardo">
                    <h5 className="cardo-title">ENHANCING SOFT SKILL</h5>
                    <img className="thumbnail" src={Enhancing} alt="certificate" />

                    <p className=" mt-5 pt-5 cardo-desc">This certificate is got from NPTEL Course
                        completion <br />
                        .</p>
                </div>
                <br />
                <div className="cardo">
                    <h5 className="cardo-title">REACT+REDUX</h5>
                    <img className="thumbnail" src={react} alt="certificate" />

                    <p className=" mt-5 pt-5 cardo-desc">This certificate is got from Sololearn Course
                        completion <br />
                        .</p>
                </div>
                <div className="cardo">
                    <h5 className="cardo-title">JAVASCRIPT</h5>
                    <img className="thumbnail" src={javascript} alt="certificate" />

                    <p className=" mt-5 pt-5 cardo-desc">This certificate is got from Sololearn Course
                        completion <br />
                        .</p>
                </div>
                <div className="cardo">
                    <h5 className="cardo-title">AWS</h5>
                    <img className="thumbnail" src={aws} alt="certificate" />

                    <p className=" mt-5 pt-5 cardo-desc">This certificate is got from codemithra
                        <br />
                        .</p>
                </div>
            </div>
            {/* <Certificatestep /> */}
        </>
    )
}

export default Certificate
