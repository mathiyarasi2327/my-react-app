import './intro.css';
import bg from '../../assets/image.png';
import { FaLinkedin } from "react-icons/fa";


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent pb-28">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Mathiyarasi</span> <br />Website Designer</span>
                <p className="introPara">I help businesses and individuals build clean, modern, and <br /> user-friendly websites that leave a lasting impression.</p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/mathiyarasi-m-60767b316/"
                >
                    <button
                        className="btn flex items-center gap-2 px-3 py-2"
                    >
                        <FaLinkedin size={24} />
                        <span className='text-lg'>LinkedIn</span>
                    </button>
                </a>

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section >
    );
}

export default Intro;