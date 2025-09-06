import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a passionate web designer and developer focused on creating clean, user-friendly, and visually appealing digital experiences. With a strong foundation in HTML, CSS, and JavaScript, I enjoy turning ideas into functional designs that deliver value. I also work with tools like Figma, Adobe Photoshop, and Illustrator to bring creative concepts to life.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I craft intuitive and engaging interfaces that provide smooth user experiences across devices.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I build responsive, modern websites optimized for speed, usability, and aesthetics.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>I design mobile-friendly applications with a balance of functionality and creativity.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;