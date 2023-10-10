import useDestructureString from '@/app/utils/useDestructureString';

const About = () => {
    return (
        <div className="section-container about">
            <div className="section-title">{useDestructureString('Qui sommes nous ?')}</div>
            <div className="section-moto"></div>
            <div className="about-info-container">
                <span className="about-info">
                   Artisans tailleur de pierre depuis de nombreuses années, nous sillonnons la métropole pour redonner vie aux pierres de vielles échoppes ou pour restituer aux voûtes d’églises gothiques leurs aspects originels.
                </span>
                <span className="about-info">
                  La maçonnerie et le travail de la chaux nous fascinent. Le miracle de la maçonnerie a illuminé la société, l’a modelé, a forgé ses piliers et nous en sommes les acteurs.
                </span>
                <span className="about-info">
                 Garant d’un savoir-faire millénaire, l’entreprise Pietra Antica vous accompagne dans vos rénovations de biens particuliers, dans la restauration du patrimoine ou dans la création d’ouvrage en pierres massives.
                </span>
                <span className="about-info bold">Contactez nous au 06 66 39 67 58.</span>
            </div>
        </div>
    );
};

export default About;
