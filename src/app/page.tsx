'use client'

import Navbar from '@/app/components/Navbar/Navbar';
import Hero from '@/app/components/Hero/Hero';
import { useEffect } from 'react';

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
        </>
    );
}
