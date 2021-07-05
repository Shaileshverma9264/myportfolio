import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Mainfooter = () => {
    return (
        <>
            {/* Footer social  */}
            <section className="ft-social bg-dark">
                <ul className="ft-social-list">
                    <h5 className="text-white pt-3 pl-5">Get connected with me on social networks! ↔</h5>
                   
                    <li className=" ml-auto pr-5">
                        <SocialIcon className="social-icons" url="https://twitter.com/SHAILES27154829" target="_blank" network="twitter" bgColor="skyblue" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        <SocialIcon className="social-icons" url="https://www.linkedin.com/in/shailesh-verma-136875195/" target="_blank" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        <SocialIcon className="social-icons" url="https://www.facebook.com/ashish.9264" target="_blank" network="facebook" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        <SocialIcon className="social-icons" url="https://github.com/Shaileshverma9264" target="_blank" network="github" fgColor="#fff" style={{ height: 40, width: 40 }} />
                        <SocialIcon className="social-icons" url="https://www.instagram.com/shaileshverma43/" target="_blank" network="instagram" fgColor="#fff" style={{ height: 40, width: 40 }} />

                    </li>
                </ul>

            </section>
        </>
    )
}

export default Mainfooter
