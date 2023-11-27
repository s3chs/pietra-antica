'use client';

const Hero = () => {

    return (
        <section className="hero-container">
            <div className="company-first-name italic">
                <span>Pietra</span>
            </div>
            <div className="company-second-name italic">
                <span>Antica</span>
            </div>
            <div className="company-info"><span>Spécialiste de la taille de pierre à Bordeaux et ses alentours.</span></div>
            <div className="hero-img-container">
                <img src="/assets/image-2.jpg" alt="hero-image"/>
            </div>
        </section>
    );
};

export default Hero;
