import React from 'react';
import { testimonialStyles as styles } from '../assets/dummyStyles';
import testimonials from '../assets/Testimonialdata';
import { FaCar, FaQuoteLeft, FaStar} from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.badge}>
                        <FaCar className={`${styles.quoteIcon}`}></FaCar>
                        <span className={styles.badgeText}>
                            Customer Experience
                        </span>
                    </div>

                    <h1 className={styles.title}>
                        Premium <span className={styles.accentText}>Drive</span> Experiences
                    </h1>

                    <div className={styles.dividerContainer}>
                        <div className={styles.dividerLine}></div>

                        <FaCar className={`${styles.accentText} mx-4`}></FaCar>

                        <div className={styles.dividerLine}></div>
                    </div>

                    <p className={`${styles.subtitle} pb-5`}>
                        Hear from our valued customers about their journy with our premium fleet
                    </p>

                    {/* testimonials */}
                    <div className={styles.grid}>
                        {testimonials.map((t, index) => {
                            const shape = styles.cardShapes[index % styles.cardShapes.length];
                            const IconComponent = styles.icons[index % styles.icons.length];

                            return (
                                <div
                                    key={t.id}
                                    className={styles.card}
                                    style={{
                                        clipPath: "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
                                        background:
                                            "linear-gradient(145deg, rgba(30,30,40,0.8), rgba(20,20,30,0.8))",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(100,100,120,0.2)",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <div className={styles.cardContent}>
                                        <div className="flex justify-between items-baseline mb-6">
                                            <FaQuoteLeft className={styles.quoteIcon} size={28} />

                                            <div className={styles.ratingContainer}>
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={`${i < t.rating ? styles.accentText : "text-gray-700"} ${styles.star}`}
                                                        size={18}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <p className={styles.comment}>
                                            "{t.comment}"
                                        </p>

                                        <div className={styles.carInfo}>
                                            <FaCar className={styles.carIcon} />
                                            <span className={styles.carText}>
                                                {t.car}
                                            </span>
                                        </div>

                                        <div className={styles.authorContainer}>
                                            <div className={styles.avatar}>
                                                {t.name.charAt(0)}
                                            </div>

                                            <div className={styles.authorInfo}>
                                                <h3 className={styles.authorName}>{t.name}</h3>
                                                <p className={styles.authorRole}>{t.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.decorativeCorner}></div>

                                    <div className={styles.patternIcon}>
                                        <IconComponent size={36}></IconComponent>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* stats section */}
                    <div className={styles.statsContainer}>
                        <div className={styles.statsGrid}>

                            <div className={styles.statItem}>
                                <div className={styles.statValue(styles.statColors.value[0])}>
                                    10k+
                                </div>
                                <div className={styles.statLabel(styles.statColors.label[0])}>
                                    Happy Customers
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <div className={styles.statValue(styles.statColors.value[0])}>
                                    250k+
                                </div>
                                <div className={styles.statLabel(styles.statColors.label[0])}>
                                    Luxury Vehicals
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <div className={styles.statValue(styles.statColors.value[0])}>
                                    24/7
                                </div>
                                <div className={styles.statLabel(styles.statColors.label[0])}>
                                    Support
                                </div>
                            </div>

                            <div className={styles.statItem}>
                                <div className={styles.statValue(styles.statColors.value[0])}>
                                    50+
                                </div>
                                <div className={styles.statLabel(styles.statColors.label[0])}>
                                    Location
                                </div>
                            </div>

                        </div>
                    </div>
                        {/* cta  */}
                        <div className={`${styles.ctaContainer}  bg-linear-to-b from-gray-800 via-gray-600 to-gray-400  `}>
                            <h2 className={styles.ctaTitle}>
                                Ready For Your Premium Experience
                            </h2>
                            <p className={styles.ctaText}>
                                Join Thousand os satisfied customers who have experienced our premium fleet and exceptional services
                            </p>
                            <a href="/cars" className={styles.ctaButton}>
                            Book Your Luxury Ride
                            </a>
                        </div>
                </div>
                {/* <div className={styles.bottom}></div> */}
            </div>
        </div>
    );
};

export default Testimonial;