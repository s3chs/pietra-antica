import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Work = () => {

    const sectionRef = useRef<any>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top+=200px',
                end: 'top+=200px top+=200px',
                scrub: 1,
            },
        });

        tl.to('.image-overlay', {
            opacity: 0.6,
        }).to(sectionRef.current, {
            clipPath: 'inset(0%)',
        }, 0).to('.work-texts-container > h1', {
            opacity: 1,
            y: '0',
        }, 0).to('.work-field-container', {
            stagger: 0.1,
            opacity: 1,
            y: '0',
        }, 0);
    }, []);

    return (
        <div className="section-container work" ref={sectionRef}>
            <div className="work-texts-container">
                <h1>Notre métier</h1>
                <div className="work-fields">
                    <div className="work-field-container">
                        <h2 className="work-field-title">
                            Taille de pierre
                        </h2>
                        <span>Pierre apparente</span>
                        <span>Ravalement de façade</span>
                        <span>Taille de moulures</span>
                        <span>Pose plan de travail marbre</span>
                        <span>Plaquage pierre</span>
                        <span>Pose pierre massive</span>
                    </div>
                    <div className="work-field-container">
                        <h2 className="work-field-title">
                            Maçonnerie Bâti-Ancien
                        </h2>
                        <span>Enduit à la chaux</span>
                        <span>Moellonage</span>
                        <span>Dale de Chaux</span>
                        <span>Dallage pierre</span>
                        <span>Ouverture et pose IPN</span>
                    </div>
                    <div className="work-field-container">
                        <h2 className="work-field-title">
                            Lieux d'activité
                        </h2>
                        <span>Maison particulière</span>
                        <span>Échoppes</span>
                        <span>Monuments</span>
                        <span>Châteaux</span>
                        <span>Immeubles</span>
                    </div>
                </div>
            </div>
            <img
                className="background-image"
                src="/assets/image-1.jpg"
                alt="background image"
            />
            <div className="image-overlay"></div>
        </div>
    );
};

export default Work;
