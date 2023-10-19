import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';

export const transition = {
    duration: 0.5,
    ease: easeInOut,
};

export default function JobPage({
                                    pageName,
                                    images,
                                    error,
                                    description,
                                }: {pageName: string, images: any[], error: string | null, description: string}) {

    return (
        <div
            className="job-page-container"
            transition={transition}
        >
            <div className="back-btn">Retour</div>
            <div className="job-page-section-title">
                <span>{pageName}</span>
            </div>
            <div className="job-page-section-description">
                <span>
                {description}
                </span>
            </div>
            <div className="gallery-title">
                <span>Galerie</span>
            </div>
            {error ? (<span className="error-message">{error}</span>) :
                (
                    <>
                        <div className="images-container">
                            {images.map((img, i) => (
                                <div className="image-container" key={i}>
                                    <Image
                                        src={images[i]}
                                        alt="image"
                                        className="job-img opacity-0"
                                        width={300}
                                        height={300}
                                        onLoadingComplete={(image) => image.classList.remove('opacity-0')}
                                    />
                                    <div className="job-img-overlay"></div>
                                    <span className="text-overlay">Voir</span>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
}
