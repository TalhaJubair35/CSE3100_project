import React from 'react';
import { footerStyles as styles } from '../assets/dummyStyles';
import { Link } from 'react-router-dom';
import logo from '../assets/logocar.png'
import { FaEnvelope, FaFacebookF, FaHourglass, FaInstagram, FaLinkedinIn, FaMapMarkedAlt, FaPhone, FaRing, FaSubscript, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.topElements}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.roadLine}></div>
            </div>
            <div className={styles.innerContainer}>
                <div className={styles.grid}>
                    <div className={styles.brandSection}>
                        <Link to="/" className={styles.logoContainer}>
                            <div className={styles.brandSection}>
                                <img src={logo} alt="Logo"
                                    className="h-[1em] w-auto block"
                                    style={
                                        {
                                            display: 'block',
                                            objectFit: 'contain',
                                        }
                                    }
                                />
                                <span className={styles.logoText}>CarWheels</span>
                            </div>
                        </Link>
                        <p className={styles.description}>
                            premiun car rental services with the latest models and expectional customer services. Drive your dream car today!
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
                                (Icon, i) => (
                                    <a
                                        href="#"
                                        key={i}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
                                    >
                                        <Icon size={18} />
                                    </a>
                                )
                            )}
                        </div>
                    </div>
                    {/* quick link section  */}
                    <div>
                        <h3 className={styles.sectionTitle}>
                            Quick Links
                            <span className={styles.underline}></span>
                        </h3>
                        <ul className={styles.linkList}>
                            {["Home", "Cars", "Contact Us"].map((link, i) => (
                                <li key={i}>
                                    <a href={
                                        link === "Home" ? "/" : link === "Contact Us" ? "/contact" : "/cars"
                                    } className={styles.linkItem}>
                                        <span className={styles.bullet}></span>
                                        {link}
                                    </a>
                                </li>
                            ))

                            }
                        </ul>
                    </div>
                    {/* contact ? */}
                    <div>
                        <h3 className={styles.sectionTitle}>
                            Contact Us
                            <span className={styles.underline}></span>
                        </h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <FaMapMarkedAlt className={styles.contactIcon}></FaMapMarkedAlt>
                                <span>Dhaka Gulistan-123/A</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaPhone className={styles.contactIcon}></FaPhone>
                                <span>+8801709123456</span>
                            </li>
                            <li className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} ></FaEnvelope>
                                <span>info@hexagoncarwheel.com</span>
                            </li>

                        </ul>
                        <div className={styles.hoursContainer}>
                            <h4 className={styles.hoursTitle}>

                            </h4>
                            <div className={styles.hoursText}>
                                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                                <p>Saturday: 9:00 AM - 6:00 PM</p>
                                <p>Sunday: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>
                    </div>
                    {/* newsletter  */}
                            <div>
                                <h3 className={styles.sectionTitle}>
                                    News Letter
                                    <span className={styles.underline}></span>
                                </h3>
                                <p className={styles.newsletterText}>
                                    Subscribe for special offers and updates
                                </p>
                                <form className='space-y-3'>
                                    <input type="email" name="" id="" placeholder='Your email address'
                                    className={styles.input}/>
                                <button type='submit' className={styles.subscribeButton} >
                            Subscribe Now!
                            <FaHourglass className='ml-2'></FaHourglass>
                                </button>
                                </form>
                            </div>
                </div>
                {/* cpyright */}
                <div className={styles.copyright}>
                    <p>
                        &coppy; {new Date().getFullYear} CarWheels. All rights reserved.
                    </p>
                    <p className='mt-3 md:mt-0'>
                       Designed by <a href="https://www.facebook.com/talha.jubu.14" target='_blank' className={styles.designerLink}>Talha Jubair</a>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;