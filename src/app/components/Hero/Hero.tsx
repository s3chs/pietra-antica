'use client';
import { LoopingElement } from '../Marquee/LoopingElement';
import { Marquee } from '../Marquee/Marquee';
import { useEffect, useRef } from 'react';

const Hero = () => {

    const refs: React.MutableRefObject<any> = useRef([]);

    const addToRefs = (el: HTMLDivElement) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        new LoopingElement(refs.current[0], 0, 0.002);
        new LoopingElement(refs.current[1], -100, 0.002);
    }, []);

    return (
        <div className="hero-container">
            <div className="company-first-name">
                <span className="italic">Pietra</span>
            </div>
            <div className="company-second-name">
                <span className="italic">Antica</span>
            </div>
            <div className="company-info"><span>Spécialiste de la taille de pierre à Bordeaux et ses alentours.</span></div>
            <div className="hero-img-container">
                <img src="/images/image-2.jpg" alt="hero-image"/>
            </div>
            <div className="hero-marquee">
                <Marquee
                    text={'Taille de pierre et sculpture - Ravalement de façade - Placage pierre et dallage - Maçonnerie traditionnelle et pierre apparente - '}
                    addRef={addToRefs}/>
            </div>
        </div>
    );
};

export default Hero;
