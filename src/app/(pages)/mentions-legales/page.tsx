'use client';
import { useEffect } from 'react';
import gsap from '@/app/gsapSetup';
import { useRoutingContext } from '@/app/context/RoutingContext';
import { PagesType } from '@/app/PagesType';
import { useRouter } from 'next/navigation';
import RouterAnimation from '@/app/components/RouterAnimation/RouterAnimation';

export default function MentionsLegales() {

    const {setFirstRender} = useRoutingContext();
    const router = useRouter();

    useEffect(() => {
        setFirstRender(false);

        const timeline = gsap.timeline();

        timeline.to('.section-title.legal-mentions span', {
            y: 0,
        }).to('.legal-mentions-infos', {
            opacity: 1,
            delay: 0.7,
        }).to('.line-separator', {
            width: '100%',
            delay: -0.7,
        }).to('.back-btn', {
            opacity: 1,
            delay: -1,
        });
    }, []);

    function navigateToHome() {
        const tl = gsap.timeline();
        const pageNameSpan: any = document.querySelector('.router-animation-container span');
        const routerContainer = document.querySelector('.router-animation-container');
        const animationLayer = document.querySelector('.animation-layer');

        if (pageNameSpan)
            pageNameSpan.textContent = PagesType['Home'];

        tl.to(routerContainer, {
            top: 0,
            ease: 'power3.inOut',
            duration: 1,
        }).to('.layout-container', {
            height: '100vh',
            duration: 0,
        }).to(animationLayer, {
            left: 0,
            ease: 'none',
            duration: 0,
        }).to(routerContainer, {
            top: '-100vh',
            ease: 'power3.inOut',
            duration: 1,
        }).to(routerContainer, {
            top: '100vh',
            ease: 'none',
            duration: 0,
        }).to('.layout-container', {
            height: 'auto',
            duration: 0,
            onComplete: () => {
                router.push('/');
            },
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
            <RouterAnimation/>
        </div>
    );
}
