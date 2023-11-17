'use client';

import Hero from '@/app/components/Hero/Hero';
import About from '@/app/components/About/About';
import Video from '@/app/components/Video/Video';
import Work from '@/app/components/Work/Work';
import Sculpture from '@/app/components/Sculpture/Sculpture';
import WorksTitle from '@/app/components/WorksTitle/WorksTitle';
import Paving from '@/app/components/Paving/Paving';
import Masonry from '@/app/components/Masonry/Masonry';
import Facade from '@/app/components/Facade/Facade';
import Contact from '@/app/components/Contact/Contact';
import Introduction from '@/app/components/Introduction/Introduction';
import gsap from '@/app/utils/gsapSetup';
import { PagesTypeLink } from '@/app/utils/PagesType';
import { useRouter } from 'next/navigation';

export default function Index() {

    const router = useRouter();

    function navigateToPage(pageName: string) {
        const tl = gsap.timeline();
        tl.to('.navigation-links-container > span, .overlay-nav-links > span', {
            pointerEvents: 'none',
            duration: 0,
        }).to('.content-container', {
            opacity: 0,
            onComplete: () => router.push(PagesTypeLink[pageName]),
        }).to('.content-container', {
            delay: 0.5,
            opacity: 1,
        }).to('.navigation-links-container > span, .overlay-nav-links > span', {
            pointerEvents: 'auto',
            duration: 0,
        });
    }

    return (
        <>
            <Introduction/>
            <Hero/>
            <About/>
            <Video/>
            <Work/>
            <WorksTitle/>
            <Sculpture navigateToPage={navigateToPage}/>
            <Paving navigateToPage={navigateToPage}/>
            <Masonry navigateToPage={navigateToPage}/>
            <Facade navigateToPage={navigateToPage}/>
            <Contact/>
        </>
    );
}
