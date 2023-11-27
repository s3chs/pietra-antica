import { useEffect } from 'react';
import gsap from '@/app/utils/gsapSetup';

const WorksTitle = () => {

    useEffect(() => {
        const worksSection = document.querySelectorAll(
            '.work-section-container.sculpture, .work-section-container.cutting, .work-section-container.masonry, .work-section-container.paving');

        if (worksSection)
            gsap.to('works-title', {
                scrollTrigger: {
                    trigger: '.works-title',
                    start: 'top 85%',
                    toggleClass: 'reveal-text',
                    once: true,
                },
            });

        worksSection.forEach(el => gsap.to(worksSection, {
                scrollTrigger: {
                    trigger: el,
                    start: '0% 85%',
                    toggleClass: 'reveal-content',
                    once: true,
                },
            }),
        );

    }, []);

    return (
        <h1 className="works-title">
            Nos travaux
        </h1>
    );
};

export default WorksTitle;
