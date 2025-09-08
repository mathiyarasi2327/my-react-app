import './contact.css';
import Walmart from '../../assets/walmart.jpeg';
import Adobe from '../../assets/adobe.jpeg';
import Microsoft from '../../assets/microsoft.jpeg';
import Facebook from '../../assets/facebook.jpeg';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5z23kbd', 'template_zccq2cw', form.current, 'SCATfwWqnxX8Jz1Tn')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Project</h1>
                <span className="clientDesc">
                    Here are some of the projects I have worked on during my learning journey. These projects helped me practice my skills in web design and development.
                </span>
                <div className="clientImgs">
                    <a href="https://mathiyarasi2327.github.io/Digital-clock/" target="_blank" className="clientImgWrapper">
                        <img src={Walmart} alt="Client" className="clientImg" />
                    </a>
                    <a href="https://mathiyarasi2327.github.io/BMI-Calculator/" target="_blank" className="clientImgWrapper">
                        <img src={Adobe} alt="Client" className="clientImg" />
                    </a>
                    <a href="https://mathiyarasi232007.github.io/Mathiyarsi-s-Profile/" target="_blank" className="clientImgWrapper">
                        <img src={Microsoft} alt="Client" className="clientImg" />
                    </a>
                    <a href="https://mathiyarasi2327.github.io/Responsive-Neumorphic-Calculator/" target="_blank" className="clientImgWrapper">
                        <img src={Facebook} alt="Client" className="clientImg" />
                    </a>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I'd love to connect with you! Whether you have an opportunity, want to collaborate, or just want to say hi — feel free to reach out.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;