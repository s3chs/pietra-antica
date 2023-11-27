'use client';
import './sass/main.scss';
import Navbar from '@/app/components/Navbar/Navbar';
import RoutingContextProvider from '@/app/context/RoutingContext';

export default function RootLayout({children}: {children: React.ReactNode}) {

    return (
        <html lang="fr">
        <head>
            <link rel="shortcut icon" href="/assets/favicon/favicon.ico"/>
            <title>Pietra Antica</title>
            <meta name="description" content="Entreprise de taille de pierre"/>
        </head>
        <body>
        <div className="layout-container">
            <Navbar/>
            <div className="content-container">
                <RoutingContextProvider>
                    {children}
                </RoutingContextProvider>
            </div>
        </div>
        </body>
        </html>
    );
}
