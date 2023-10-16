'use client';
import { LoopingElement } from '../Marquee/LoopingElement';
import { Marquee } from '../Marquee/Marquee';
import { useEffect, useRef } from 'react';
import useDestructureString from '@/app/utils/useDestructureString';

const Hero = () => {

    const refs: React.MutableRefObject<any> = useRef([]);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };


    return (
        <section className="hero-container">
            <div className="company-first-name italic">
                {useDestructureString('Pietra')}
            </div>
            <div className="company-second-name italic">
                {useDestructureString('Antica')}
            </div>
            <div className="company-info"><span>Spécialiste de la taille de pierre à Bordeaux et ses alentours.</span></div>
            <div className="hero-img-container">
                <img src="/assets/image-2.jpg" alt="hero-image"/>
            </div>
        </section>
    );
};

export default Hero;
