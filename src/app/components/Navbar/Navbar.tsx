import { useRef } from 'react';

const Navbar = () => {
    function displayNav() {
        navRef.current.classList.toggle('active');
        overlayRef.current.classList.toggle('active');
        navRef.current.style.pointerEvents = 'none';

        setTimeout(() => {
            navRef.current.style.pointerEvents = 'auto';
        }, 700);
    }

    const navRef = useRef<any>(null);
    const overlayRef = useRef<any>(null);

    return (
        <div className="navbar-container" ref={navRef}>
            <div className="company-name-container">
                <span>Pietra Antica</span>
            </div>
            <div className="navigation-links-container">
                <a href="/sculpture">Taille de pierre</a>
                <a href="/placage">Placage et dallage</a>
                <a href="/facade">Ravalement de façade</a>
                <a href="/maconnerie">Maçonnerie traditionelle</a>
            </div>
            <div className="navigation-responsive-container" onClick={displayNav}>
                <div className="hamburger-container">
                    <div className="bar one"></div>
                    <div className="bar two"></div>
                    <div className="bar three"></div>
                </div>
            </div>
            <div className="nav-overlay-container" ref={overlayRef}>
                <div className="overlay-nav-links">
                    <a href="/sculpture">Taille de pierre</a>
                    <a href="/placage">Placage et dallage</a>
                    <a href="/facade">Ravalement de façade</a>
                    <a href="/maconnerie">Maçonnerie traditionelle</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
