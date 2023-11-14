import Image from 'next/image';
import { useRef, useState } from 'react';
import gsap from '@/app/utils/gsapSetup';
import { router } from 'next/client';
import { useRouter } from 'next/navigation';

export default function JobPage({
                                    pageName,
                                    images,
                                    error,
                                    description,
                                }: {pageName: string, images: any[], error: string | null, description: string}) {

    const [activeCarousel, setActiveCarousel] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const carouselContainer = useRef(null);
    const router = useRouter();

    function displayImage(index: number) {
        setActiveIndex(index);
        setActiveCarousel(true);
    }

    function changeImageIndex(indexAction: string) {
        let newIndex = activeIndex;

        if (indexAction === 'increase') {
            newIndex = (newIndex + 1) % images.length;
        } else if (indexAction === 'decrease') {
            newIndex = (newIndex - 1 + images.length) % images.length;
        }

        setActiveIndex(newIndex);
    }

    function navigateToHome(pageName: string) {
        const tl = gsap.timeline();
        tl.to('.back-btn', {
            pointerEvents: 'none',
            duration: 0,
        }).to('.content-container', {
            opacity: 0,
            onComplete: () => router.push('/'),
        }).to('.content-container', {
            delay: 0.5,
            opacity: 1,
        }).to('.navigation-links-container > span, .overlay-nav-links > span', {
            pointerEvents: 'auto',
            duration: 0,
        });
    }

    return (
        <div className={'job-page-container ' + (activeCarousel ? 'display-carousel' : '')}>
            <div className="job-page-infos">
                <div className="back-btn" onClick={() => navigateToHome('Home')}>Retour</div>
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
            </div>
            {error ? (<span className="error-message">{error}</span>) :
                (
                    <>
                        <div className="images-container">
                            {images.map((img, i) => (
                                <div
                                    className="image-container"
                                    key={i}
                                    onClick={() => displayImage(i)}
                                >
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
                        {images && activeIndex !== null && (
                            <div ref={carouselContainer} className={'carousel-container ' + (activeCarousel ? 'display-carousel' : '')}>
                                <Image
                                    onClick={() => setActiveCarousel(false)}
                                    className="cancel"
                                    src="/assets/cancel.svg"
                                    alt="cancel-button"
                                    width={40}
                                    height={40}
                                />
                                <Image
                                    onClick={() => changeImageIndex('decrease')}
                                    className="arrow left"
                                    src="/assets/arrow.svg"
                                    alt="arrow-left"
                                    width={70}
                                    height={70}
                                />
                                <div className="carousel-image-container">
                                    {images.length && (
                                        <Image
                                            className="carousel-image"
                                            src={images[activeIndex]}
                                            alt="image"
                                            fill={true}
                                        />
                                    )}
                                </div>
                                <Image
                                    onClick={() => changeImageIndex('increase')}
                                    className="arrow right"
                                    src="/assets/arrow.svg"
                                    alt="arrow-left"
                                    width={70}
                                    height={70}
                                />
                            </div>)}
                    </>
                )
            }
        </div>
    );
}
