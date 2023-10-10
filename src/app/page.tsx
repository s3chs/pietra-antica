'use client';

import Navbar from '@/app/components/Navbar/Navbar';
import Hero from '@/app/components/Hero/Hero';
import { useEffect } from 'react';
import About from '@/app/components/About/About';
import Video from '@/app/components/Video/Video';

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
            <Navbar/>
            <Hero/>
            <About/>
            <Video/>
        </>
    );
}
