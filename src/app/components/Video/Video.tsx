import { useEffect, useRef } from 'react';
import gsap from '@/app/utils/gsapSetup';

const Video = () => {

    const videoRef = useRef<any>(null);

    useEffect(() => {
        const videoSection = document.querySelector('.section-container.video');
        const lines = document.querySelectorAll('.line-separator.video');
        const title = document.querySelector('.title.video');
        const videoWrapper = document.querySelector('.video-wrapper');

        if (videoSection)
            gsap.to(videoSection, {
                scrollTrigger: {
                    trigger: '.section-container.video',
                    start: 'top 85%',
                    toggleClass: 'reveal-text',
                    once: true,
                },
            });

        lines.forEach(el => gsap.to(videoSection, {
                scrollTrigger: {
                    trigger: el,
                    start: '0% 85%',
                    toggleClass: 'reveal-line',
                    once: true,
                },
            }),
        );

        gsap.to(videoSection, {
            scrollTrigger: {
                trigger: videoWrapper,
                start: '-100% 85%',
                toggleClass: 'reveal-video',
                once: true,
            },
        });

        gsap.to(videoSection, {
            scrollTrigger: {
                trigger: title,
                start: '-100% 85%',
                toggleClass: 'reveal-text',
                once: true,
            },
        });

    }, []);

    return (
        <section className="section-container video">
            <div className="line-separator video"></div>
            <span className="title video">Notre art</span>
            <div className="video-wrapper">
                <video ref={videoRef} src="/assets/luxlapis.m4v" controls loop muted autoPlay></video>
            </div>
            <div className="line-separator video"></div>
        </section>
    );
};

export default Video;
