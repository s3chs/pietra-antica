import Image from 'next/image';

const Contact = () => {
    return (
        <div className="section-container contact">
            <span className="section-title">Nous contacter</span>
            <div className="contact-info-container">
                <span>Pour toute demande de devis ou renseignements, n'hésitez pas à nous contacter sur ce numéro de téléphone: 06 30 53 48 76</span>
                <span>Vous pouvez aussi nous contacter par mail à cette adresse: entreprisepietraantica@gmail.com</span>
            </div>
            <div className="footer">
                <div className="left-infos">
                    <span className="title">Contact</span>
                    <div className="col">
                        <div className="col-left">
                            <span className="name">Nelson Spenle</span>
                            <span className="address">35 rue de la drag queen</span>
                            <span className="zip">33000, LGBT land</span>
                        </div>
                        <div className="col-right">
                            <span className="phone">06 30 53 48 76</span>
                            <span className="mail">entreprisepietraantica@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="logo-container">
                    <Image
                        src="/assets/logo.png"
                        fill={true}
                        priority={true}
                    />
                </div>
                <div className="right-infos">
                    <span className="title">Informations</span>
                    <span className="legal-mentions">Mentions légales</span>
                    <span className="site-name">Pietra Antica 2023</span>
                    <span className="site-creator">Site web créé par philippe buteau</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
