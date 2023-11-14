'use client';
import { useRouter } from 'next/navigation';
import { PagesType } from '@/app/utils/PagesType';
import gsap from '@/app/utils/gsapSetup';

export default function MentionsLegales() {
    const router = useRouter();

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
                    <span>Monsieur Lucas Spenle,12 Rue Camille Godard, 33000 Bordeaux.</span>
                </div>
                <div className="legal-mentions creator">
                    <span className="title">Créateur</span>
                    <span>Monsieur Philippe Buteau, philippe.buteau06@gmail.com, 0689680931.</span>
                </div>
                <div className="legal-mentions publication">
                    <span className="title">Responsable publication</span>
                    <span>Monsieur Lucas Spenle, entrepriseluxlapis@gmail.com, 0679094553.</span>
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
