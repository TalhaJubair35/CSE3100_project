import React from 'react';
import { carPageStyles } from '../assets/dummyStyles';

import carsData from '../assets/HcarsData';
import { FaGasPump, FaShieldAlt, FaTachometerAlt, FaUserFriends } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cars = () => {

    const navigate = useNavigate();


    return (
        <div className={carPageStyles.pageContainer}>
            {/* main content */}
            <div className={carPageStyles.contentContainer}>
                <div className={carPageStyles.headerContainer}>
                    <div className={carPageStyles.headerDecoration}></div>
                    <h1 className={carPageStyles.title}>Premium Car Collection</h1>
                    <p className={carPageStyles.subtitle}>
                        Discover Our Exclusive Fleet Of Luxury Vehicle.
                    </p>
                </div>

                <div className={carPageStyles.gridContainer}>
                    {
                        carsData.map((car) => (
                            <div key={car.id} className={carPageStyles.carCard}>
                                <div className={carPageStyles.glowEffect}></div>
                                <div className={carPageStyles.imageContainer}>
                                    <div className='absolute inset-0 z-10'></div>
                                    <img src={car.image} alt={car.name} className={carPageStyles.carImage} />
                                    <div className={carPageStyles.priceBadge}>${car.price}</div>
                                </div>
                                <div className={carPageStyles.cardContent}>
                                    <div className={carPageStyles.headerRow}>
                                        <div>
                                            <h3 className={carPageStyles.carName}>{car.name}</h3>
                                            <p className={carPageStyles.carType}> {car.type}</p>
                                        </div>
                                    </div>
                                    <div className={carPageStyles.specsGrid}>
                                        <div className={carPageStyles.specItem}>
                                            <div className={carPageStyles.specIconContainer}>
                                                <FaUserFriends className='text-sky-400'></FaUserFriends>
                                            </div>
                                            <span>
                                                {car.seats} Seats
                                            </span>
                                        </div>

                                        <div className={carPageStyles.specItem}>
                                            <div className={carPageStyles.specIconContainer}>
                                                <FaGasPump className='text-amber-400'></FaGasPump>
                                            </div>
                                            <span>
                                                {car.fuel} Fuel
                                            </span>
                                        </div>

                                        <div className={carPageStyles.specItem}>
                                            <div className={carPageStyles.specIconContainer}>
                                                <FaTachometerAlt className='text-sky-400'></FaTachometerAlt>
                                            </div>
                                            <span>
                                                {car.mileage} Milage
                                            </span>
                                        </div>

                                        <div className={carPageStyles.specItem}>
                                            <div className={carPageStyles.specIconContainer}>
                                                <FaShieldAlt className='text-Purple-400'></FaShieldAlt>
                                            </div>
                                            <span>
                                                Premium
                                            </span>
                                        </div>

                                    </div>
                                    <button onClick={() => navigate(`/cars/${car.id}`, { state: { car } })} className={carPageStyles.buttonIcon}>

                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={carPageStyles.decor1}> </div>
                <div className={carPageStyles.decor2}> </div>
            </div>
        </div>
    );
};

export default Cars;