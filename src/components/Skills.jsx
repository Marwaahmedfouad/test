import React from 'react'
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
    const value = 0.66;

    return (
        <>
            {skills.map(({ title, percentage }, index) => {
                return (
                    <div className="progress__box" key={index}>
                        <div className="progress__circle">
                        {/* <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} /> */}
                        {/* or */}
                        <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage} />
                        </div>

                        <div className="skills_title"> {title}</div>
                    </div>

                )
            })}
        </>
    )
}

export default Skills
