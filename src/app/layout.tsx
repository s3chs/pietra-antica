'use client';
import './sass/main.scss';
import Navbar from '@/app/components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import { PageWrapper } from '@/app/components/PageWrapper/PageWrapper';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="fr">
        <head>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <title>Pietra Antica</title>
            <meta name="description" content="Entreprise de taille de pierre"/>
        </head>
        <body>
        <Navbar/>
        <PageWrapper>
            <div className="layout-container">
                {children}
            </div>
        </PageWrapper>
        </body>
        </html>
    );
}
