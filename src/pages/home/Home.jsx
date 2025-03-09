// Modified JSX remains the same as in the second code
import React from 'react';
import Profile from '../../assets/aayush.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import './home.css';
import Name from "../../components/Name.jsx";
import Navber from "../../components/Navbar.jsx";
import MatterBackground from './MatterBackground.jsx';

const Home = () => {
    return (
        <div className="home-container">
            <MatterBackground />

            <div className="social-buttons">
                <a href="https://www.instagram.com/drstrox/?hl=en" target="_blank" rel="noopener noreferrer" className="social-button">
                    <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550176701177" target="_blank" rel="noopener noreferrer" className="social-button">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/aayush-yadav-7a0b40282/" target="_blank" rel="noopener noreferrer" className="social-button">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/drstrox" target="_blank" rel="noopener noreferrer" className="social-button">
                    <FaGithub />
                </a>
            </div>
            
            <section className='home section grid'>
                <img src={Profile} alt='' className='home__img' />
                <div className='home__content'>
                    <div className='home__data'>
                        <h1 className='home__title'>
                            <span><Name /></span>
                        </h1>

                        <p className='home__description'>
                            I'm a Computer Science student at the Indian Institute of Technology Indore with a strong passion for cutting-edge technologies like blockchain, React, and databases. I enjoy diving deep into these areas to explore innovative solutions and stay at the forefront of tech advancements.
                        </p>

                        <Link to='/about' className='button'>
                            More About Me{' '}
                            <span className='button__icon'>
                                <FaArrowRight />
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="color__block"></div>
            </section>
        </div>
    );
};

export default Home;
