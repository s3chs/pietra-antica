import { useEffect, useRef, useState } from 'react';
import gsap from '@/app/utils/gsapSetup';
import { useRouter } from 'next/navigation';
import { PagesTypeLink } from '@/app/utils/PagesType';

const Navbar = () => {
    const router = useRouter();

    const [displayResponsiveNav, setDisplayResponsiveNav] = useState<boolean>(false);

    function displayNav() {
        setDisplayResponsiveNav(displayResponsiveNav => !displayResponsiveNav);
        navRef.current.classList.toggle('active');
        overlayRef.current.classList.toggle('active');
        navRef.current.style.pointerEvents = 'none';

        setTimeout(() => {
            navRef.current.style.pointerEvents = 'auto';
        }, 700);
    }

    const navRef = useRef<any>(null);
    const overlayRef = useRef<any>(null);

    function navigateToPage(pageName: string) {
        if (displayResponsiveNav) {
            displayNav();
        }

        const tl = gsap.timeline();
        tl.to('.navigation-links-container > span, .overlay-nav-links > span', {
            pointerEvents: 'none',
            duration: 0,
        }).to('.content-container', {
            opacity: 0,
            onComplete: () => router.push(PagesTypeLink[pageName]),
        }).to('.content-container', {
            delay: 0.5,
            opacity: 1,
        }).to('.navigation-links-container > span, .overlay-nav-links > span', {
            pointerEvents: 'auto',
            duration: 0,
        });
    }

    return (
        <div className="navbar-container" ref={navRef}>
            <div className="company-name-container">
                <span>Pietra Antica</span>
            </div>
            <div className="navigation-links-container">
                <span onClick={() => navigateToPage('Cutting')}>Taille de pierre</span>
                <span onClick={() => navigateToPage('Paving')}>Placage et dallage</span>
                <span onClick={() => navigateToPage('Facade')}>Ravalement de façade</span>
                <span onClick={() => navigateToPage('Masonry')}>Maçonnerie traditionelle</span>
            </div>
            <div className="navigation-responsive-container" onClick={displayNav}>
                <div className="hamburger-container">
                    <div className="bar one"></div>
                    <div className="bar two"></div>
                    <div className="bar three"></div>
                </div>
            </div>
            <div className={displayResponsiveNav ? 'nav-overlay-container active' : 'nav-overlay-container'} ref={overlayRef}>
                <div className="overlay-nav-links">
                    <span onClick={() => navigateToPage('Cutting')}>Taille de pierre</span>
                    <span onClick={() => navigateToPage('Paving')}>Placage et dallage</span>
                    <span onClick={() => navigateToPage('Facade')}>Ravalement de façade</span>
                    <span onClick={() => navigateToPage('Masonry')}>Maçonnerie traditionelle</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
