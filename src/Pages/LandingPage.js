import React from 'react';
import NavBar from './NavBar';
import '../index.css';
import Traffic from '../assets/traffic.png';
import CleanEnvironment from '../assets/enviroment.png';
import Wallet from '../assets/wallet.png';


function LandingPage() {
    return (
        <div>
            <NavBar />
            <div className="landing-page">
                <header className="header">
                    <h1 className="lightbluecolortext">Welcome to PoolPal!</h1>
                    <p>Help the environment and save money by carpooling. We ensure carpooling is safe and fair! The website will be up soon...</p>
                    <div className="buttons">
                        <a href="/signup" className="btn btn-primary">Make an Account</a>
                        <a href="https://forms.gle/pn1SLcyBKNkh6JDp9" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Join Our Waitlist</a>
                    </div>
                </header>
                <h2 className="lightbluecolortext">Why is carpooling beneficial? </h2>
                <section className="features">
                    <div className="feature">
                        <img src={Traffic} alt="Traffic" />
                        <p> <b className="lightbluecolortext">Reduces Traffic Congestion:</b> Carpooling can significantly reduce the number of vehicles on the road. This can lead to faster commutes and less time spent in traffic for everyone.</p>
                    </div>
                    <div className="feature">
                        <img src={CleanEnvironment} alt="CleanEnvironment" />
                        <p> <b className="lightbluecolortext">Environmental Benefits:</b> Less vechiles = lower greenhouse gas emissions and less air pollution helps in mitigating climate change and improving air quality, contributing to a healthier environment.</p>
                    </div>
                    <div className="feature">
                        <img src={Wallet} alt="Wallet" />
                        <p> <b className="lightbluecolortext">Cost Savings:</b> By sharing rides, carpoolers can save on fuel costs, tolls, and parking fees. Additionally, carpooling can reduce the wear and tear, leading to lower maintenance and repair costs over time.</p>
                    </div>
                </section>
                <section className="variations">
                    <h2 className="lightbluecolortext" > Why Choose PoolPal? </h2>
                    <p className="sometext"> The ultimate carpooling solution designed to make your commute easier, cheaper, and more environmentally friendly. Our app connects you with people in your area who are traveling in the same direction, allowing you to share rides, reduce fuel costs, and cut down on traffic congestion.</p>
                    <ul className="bulletin">
                        <li>Save Money: Share fuel and maintenance costs with fellow commuters.</li>
                        <li>Reduce Traffic: Help decrease traffic congestion by reducing the number of cars on the road.</li>
                        <li>Lower Stress: Enjoy a more relaxed commute by sharing the driving responsibilities.</li>
                        <li>Eco-Friendly: Lower your carbon footprint by carpooling and reducing emissions.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default LandingPage;
