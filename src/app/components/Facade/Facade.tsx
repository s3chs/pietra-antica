import { NavigateToPageFunctionProp } from '@/app/page';

const Facade = ({navigateToPage}: NavigateToPageFunctionProp) => {
    return (
        <div className="work-section-container facade">
            <div className="info-container">
                <span className="title">Ravalement de façade</span>
                <span className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi incidunt quis rem ut?
                    Aliquam commodi consectetur consequatur cumque eos explicabo hic illum in ipsum minus necessitatibus nisi officia optio,
                    pariatur perspiciatis quaerat quis reprehenderit sed sint vitae! Aut commodi consequuntur debitis nesciunt, numquam odio officia, optio sit totam, velit vero.
                </span>
                <span className="section-button" onClick={() => navigateToPage('Facade')}>Voir plus</span>
            </div>
            <div className="image-container">
                <img src="/assets/image-1.jpg" alt="façade image"/>
            </div>
        </div>
    );
};

export default Facade;
