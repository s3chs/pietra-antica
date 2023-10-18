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
        <>
            <div className="navbar-container" ref={navRef}>
                <div className="company-name-container">
                    <span>Pietra Antica</span>
                </div>
                <div className="navigation-links-container">
                    <a href="#">Taille de pierre</a>
                    <a href="#">Placage et dallage</a>
                    <a href="#">Ravalement de façade</a>
                    <a href="#">Maçonnerie traditionelle</a>
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
                        <span>Taille de pierre</span>
                        <span>Placage et dallage</span>
                        <span>Ravalement de façade</span>
                        <span>Maçonnerie traditionelle</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
