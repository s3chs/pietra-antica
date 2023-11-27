import Image from 'next/image';
import { useEffect } from 'react';
import gsap from '@/app/utils/gsapSetup';

const Contact = () => {
    useEffect(() => {
        const contactSection = document.querySelector('.section-container.contact');

        if (contactSection)
            gsap.to('section-title.contact', {
                scrollTrigger: {
                    trigger: '.section-title.contact',
                    start: 'top 85%',
                    toggleClass: 'reveal-text',
                    once: true,
                },
            });

        gsap.to('.contact-info-container', {
            scrollTrigger: {
                trigger: '.contact-info-container',
                start: 'top 85%',
                toggleClass: 'reveal-text',
                once: true,
            },
        });

    }, []);

    return (
        <div className="section-container contact">
            <span className="section-title contact">Nous contacter</span>
            <div className="contact-info-container">
                <span>Pour toute demande de devis ou renseignements, n'hésitez pas à nous contacter sur ce numéro de téléphone: 06 30 53 48 76</span>
                <span>Vous pouvez aussi nous contacter par mail à cette adresse: entreprisepietraantica@gmail.com</span>
            </div>
            <div className="footer">
                <div className="left-infos">
                    <span className="title">Contact</span>
                    <div className="col">
                        <div className="col-left">
                            <span className="name">Nelson Spenle</span>
                            <span className="address">35 rue de la street</span>
                            <span className="zip">33000, Bordeaux</span>
                        </div>
                        <div className="col-right">
                            <span className="phone">06 30 53 48 76</span>
                            <span className="mail">entreprisepietraantica@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="logo-container">
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        fill={true}
                        priority={true}
                    />
                </div>
                <div className="right-infos">
                    <span className="title">Informations</span>
                    <span className="legal-mentions">Mentions légales</span>
                    <span className="site-name">Pietra Antica 2023</span>
                    <span className="site-creator">Site web créé par philippe buteau</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
