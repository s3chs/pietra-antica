import { useEffect } from 'react';
import gsap from '@/app/utils/gsapSetup';

const About = () => {

    useEffect(() => {
        const aboutSection = document.querySelector('.section-container.about');
        const aboutTexts = document.querySelectorAll('.about-info');

        if (aboutSection) {
            gsap.to(aboutSection, {
                scrollTrigger: {
                    trigger: '.section-title.about',
                    start: 'top 85%',
                    toggleClass: 'reveal-text',
                    once: true,
                },
            });
        }

        aboutTexts.forEach(el => gsap.to(aboutSection, {
                scrollTrigger: {
                    trigger: el,
                    start: '0% 85%',
                    toggleClass: 'reveal-text',
                    once: true,
                },
            }),
        );

    }, []);

    return (
        <section className="section-container about">
            <div className="section-title about">Qui sommes nous ?</div>
            <div className="section-moto"></div>
            <div className="about-info-container">
                <span className="about-info">
                   Artisans tailleur de pierre depuis de nombreuses années, nous sillonnons la métropole pour redonner vie aux pierres de vielles échoppes ou pour restituer aux voûtes d’églises gothiques leurs aspects originels.
                </span>
                <span className="about-info">
                  La maçonnerie et le travail de la chaux nous fascinent. Le miracle de la maçonnerie a illuminé la société, l’a modelé, a forgé ses piliers et nous en sommes les acteurs.
                </span>
                <span className="about-info">
                 Garant d’un savoir-faire millénaire, l’entreprise Pietra Antica vous accompagne dans vos rénovations de biens particuliers, dans la restauration du patrimoine ou dans la création d’ouvrage en pierres massives.
                </span>
                <span className="about-info bold">Contactez nous au 06 12 34 56 78.</span>
            </div>
        </section>
    );
};

export default About;
