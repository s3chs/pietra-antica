interface PageType {
    [key: string]: string;
}

const PagesType: PageType = {
    Cutting: 'Taille de pierre et sculpture',
    Paving: 'Placage pierre et dallage',
    Facade: 'Ravalement de façade',
    Masonry: 'Maçonnerie traditionnelle et pierre apparente',
    LegalMentions: 'Mentions légales',
    Home: 'Accueil',
};

const PagesTypeLink: PageType = {
    Cutting: 'sculpture',
    Paving: 'placage',
    Facade: 'facade',
    Masonry: 'maconnerie',
    LegalMentions: 'mentions-legales',
    Home: '/',
};

export { PagesType, PagesTypeLink };
