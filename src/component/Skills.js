import React from 'react'
import SkillBar from 'react-skills-bars';
const SKILLS = [
    {
        "type": "C",
        "level": 70,
        "color": {
            "bar": "#B2BABB "
        }
    },
    {
        "type": "C++",
        "level": 65,
        "color": {
            "bar": "#FF00FF"
        }
    },
    {
        "type": "HTML",
        "level": 90,
        "color": {
            "bar": "#F08080"
        }
    },
    {
        "type": "CSS",
        "level": 80,
        "color": {
            "bar": "#DAF7A6"
        }
    },
    {
        "type": "Bootstrap4",
        "level": 85,
        "color": {
            "bar": "#F4D9C0 "
        }
    },
    {
        "type": "Javascript",
        "level": 75,
        "color": {
            "bar": "#F7DC6F"
        }
    },
    {
        "type": "ReactJs",
        "level": 50,
        "color": {
            "bar": "#7DCEA0 "
        }
    },
    {
        "type": "Nodejs",
        "level": 70,
        "color": {
            "bar": "#A6FB93 "
        }
    },
    {
        "type": "MongoDb",
        "level": 50,
        "color": {
            "bar": "#69FEFD "
        }
    },
    {
        "type": "ExpressJs",
        "level": 60,
        "color": {
            "bar": "#B2BDFB "
        }

    },

]
const colors = {
    "bar": "#BEF001",
    "title": {
        "text": "#fff",
        "background": "#66676E "
    }
}


const Skills = () => {
    return (
        <>
            <div id="skills">
                <h1 className="text-center text-capitalize mt-5 mb-5"><span style={{ color: "orangered" }}>Technical Skills</span> </h1>
                <hr className=" mx-auto w-25 mb-2 " />
            </div>
            <div className="col-md-10 col-12 mx-auto">
                <div className="skill-body">
                    <SkillBar className="skill-container w-50" skills={SKILLS} colors={colors} ></SkillBar>
                </div>
            </div>
        </>
    )
}

export default Skills
