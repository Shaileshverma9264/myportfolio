import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



const Header = () => {
    return (

        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Full stack web development</h1>

                <Typed
                    className="typed-text"
                    strings={["A website For Web Design", "A website For Full Stack Web Development", "A website For Github project modification"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a className="btn-main-offer" href="https://drive.google.com/file/d/1iv6GWcT42xdGsoLgOwuoYDZDJA4UF-WN/view?usp=sharing" target="_blank">Download Cv <FontAwesomeIcon icon={faFileDownload} /> </a>
                {/* Social Icon Start */}
                <div className="footer-social-link">
                    <h3>Follow Me</h3>
                    <ul className="row">
                        <li>
                            <SocialIcon className="social-icon" url="https://twitter.com/SHAILES27154829" target="_blank" network="twitter" bgColor="skyblue" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="social-icon" url="https://www.linkedin.com/in/shailesh-verma-136875195/" target="_blank" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="social-icon" url="https://www.facebook.com/ashish.9264" target="_blank" network="facebook" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="social-icon" url="https://github.com/Shaileshverma9264" target="_blank" network="github" fgColor="#fff" style={{ height: 40, width: 40 }} />
                            <SocialIcon className="social-icon" url="https://www.instagram.com/shaileshverma43/" target="_blank" network="instagram" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        </li>
                    </ul>
                </div>
                {/* Social Icon End */}
                <div className="scroll-arrow">
                    <a href="#about" className="scroll-down" type="button" ><ArrowDownwardIcon /></a>
                </div>
            </div>
        </div>

    )
}

export default Header
