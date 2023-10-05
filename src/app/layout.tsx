import './sass/main.scss';

export const metadata = {
    title: 'Pietra Antica',
    description: 'Entreprise de taille de pierre',
};

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <head>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        </head>
        <body>
        <div className="layout-container">
            {children}
        </div>
        </body>
        </html>
    );
}
