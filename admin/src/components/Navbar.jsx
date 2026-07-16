import React, { useState } from 'react';
import { navbarStyles as s } from '../assets/dummyStyles.js'
import { Link } from 'react-router-dom'
import logo from '../assets/logocar.png'
import { CalendarCheck, Car, PlusCircle } from 'lucide-react'
const navLinks = [
    { path: "/", icon: PlusCircle, label: "Add Car" },
    { path: "/manage-cars", icon: Car, label: "Manage Cars" },
    { path: "/bookings", icon: CalendarCheck, label: "Bookings" },
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    return (
        <div className={s.navbar(scrolled)}>
            <div className={s.navbarInner}>
                <div className={s.navbarCenter}>
                    <div className={s.navbarBackground(scrolled)}>
                        <div className={s.contentContainer}>

                            <Link to='/' className={s.logoLink}>

                                <div className={s.logoContainer}>

                                    <img src={logo} alt="logo" className={s.logoImage}
                                        style={{
                                            objectFit: 'contain',
                                        }}
                                    />

                                    <span className={s.logoText}>Admin</span>
                                </div>

                            </Link>

                            <div className={s.desktopNav}>
                                <div className={s.navLinksContainer}>
                                    {
                                        navLinks.map((link, i) => {
                                            const Icon = link.icon;
                                            return (
                                                <React.Fragment key={link.path}>
                                                    <Link to={link.path} className={s.navLink}>
                                                        <Icon className='w-4 h-4'></Icon>
                                                        <span>{link.label}</span>

                                                    </Link>


                                                    {i < navLinks.length - 1 && (
                                                        <div className={s.navDivider} />
                                                    )}
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className={s.mobileMenuButton}>
                                <button>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;