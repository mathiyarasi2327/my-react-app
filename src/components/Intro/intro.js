import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Mathiyarasi</span> <br />Website Designer</span>
                <p className="introPara">I help businesses and individuals build clean, modern, and <br/> user-friendly websites that leave a lasting impression.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;