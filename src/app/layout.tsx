'use client';
import './sass/main.scss';
import Navbar from '@/app/components/Navbar/Navbar';
import LocomotiveScroll from 'locomotive-scroll';

export default function RootLayout({children}: {children: React.ReactNode}) {


    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'both',
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
    });

    return (
        <html lang="fr">
        <head>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <title>Pietra Antica</title>
            <meta name="description" content="Entreprise de taille de pierre"/>
        </head>
        <body>
        <div className="layout-container">
            <Navbar/>
            <div className="content-container">
                {children}
            </div>
        </div>
        </body>
        </html>
    );
}
