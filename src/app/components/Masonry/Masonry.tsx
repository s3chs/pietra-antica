const Masonry = ({navigateToPage}: () => void) => {
    return (
        <div className="work-section-container masonry">
            <div className="info-container">
                <span className="title">Maçonnerie traditionnelle et pierre apparente</span>
                <span className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi incidunt quis rem ut?
                    Aliquam commodi consectetur consequatur cumque eos explicabo hic illum in ipsum minus necessitatibus nisi officia optio,
                    pariatur perspiciatis quaerat quis reprehenderit sed sint vitae! Aut commodi consequuntur debitis nesciunt, numquam odio officia, optio sit totam, velit vero.
                </span>
                <span className="section-button" onClick={() => navigateToPage('Masonry')}>Voir plus</span>
            </div>
            <div className="image-container">
                <img src="/assets/image-5.jpg" alt="sculpture image"/>
            </div>
        </div>
    );
};

export default Masonry;
