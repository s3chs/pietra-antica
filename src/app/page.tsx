'use client';

import { useEffect } from 'react';
import Navbar from '@/app/components/Navbar/Navbar';
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

export default function Index() {

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )();
    }, []);

    return (
        <>
            <Hero/>
            <About/>
            <Video/>
            <Work/>
            <WorksTitle/>
            <Sculpture/>
            <Paving/>
            <Masonry/>
            <Facade/>
            <Contact/>
        </>
    );
}
