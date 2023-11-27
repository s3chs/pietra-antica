'use client';
import { useRouter } from 'next/navigation';
import gsap from '@/app/utils/gsapSetup';
import { useEffect } from 'react';
import { useRoutingContext } from '@/app/context/RoutingContext';

export default function MentionsLegales() {
    const router = useRouter();
    const {firstRender, setFirstRender} = useRoutingContext();

    function navigateToHome() {
        const tl = gsap.timeline();
        tl.to('.back-btn', {
            pointerEvents: 'none',
            duration: 0,
        }).to('.content-container', {
            opacity: 0,
            onComplete: () => router.push('/'),
        }).to('.content-container', {
            delay: 0.5,
            opacity: 1,
        }).to('.navigation-links-container > span, .overlay-nav-links > span', {
            pointerEvents: 'auto',
            duration: 0,
        });
    }

    useEffect(() => {
        if (firstRender) {
            const tl = gsap.timeline();
            tl.to('.navbar-container', {
                y: 0,
                height: '12vh',
                borderBottom: '1px solid black',
            }).to('.company-name-container, .navigation-links-container, .navigation-responsive-container', {
                opacity: 1,
                y: 0,
            });
        }
        setFirstRender(false);
    }, []);

    return (
        <div className="legal-mentions-page-container">
            <div className="back-btn" onClick={() => navigateToHome()}>Retour</div>
            <div className="section-title legal-mentions">
                <span>Mentions légales</span>
            </div>
            <div className="line-separator"></div>
            <div className="legal-mentions-infos">
                <div className="legal-mentions boss">
                    <span className="title">Propriétaire</span>
                    <span>Monsieur Nelson Spenle,12 Rue de la street, 33000 Bordeaux.</span>
                </div>
                <div className="legal-mentions creator">
                    <span className="title">Créateur</span>
                    <span>Monsieur Philippe Buteau, philippe.buteau06@gmail.com, 0689680931.</span>
                </div>
                <div className="legal-mentions publication">
                    <span className="title">Responsable publication</span>
                    <span>Monsieur Nelson Spenle, pietraantica@gmail.com, 0678683728.</span>
                </div>
                <div className="legal-mentions status">
                    <span className="title">Statut juridique</span>
                    <span>Entrepreneur individuel</span>
                    <span>SIRET: 82974908400010</span>
                </div>
                <div className="legal-mentions activity">
                    <span className="title">Activité principale exercée</span>
                    <span>23.70Z - Taille, façonnage et finissage de pierres.</span>
                </div>
            </div>
        </div>
    );
}
