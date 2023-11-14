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

export default function Index() {
    return (
        <>
            <Introduction/>
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
