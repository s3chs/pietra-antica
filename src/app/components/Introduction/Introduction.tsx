import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useRoutingContext } from '@/app/context/RoutingContext';

const Introduction = () => {
    const refs = useRef<any>([]);

    const addToRefs = (el: any) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    const {firstRender, setFirstRender} = useRoutingContext();

    useEffect(() => {
        if (firstRender) {
            const tl = gsap.timeline();
            tl.to(refs.current, {
                duration: 2,
                stagger: 0.3,
                opacity: 1,
                ease: 'power3.inOut',
                y: 0,
            }).
                to(refs.current, {
                    clipPath: 'inset(0% 0% 100% 0%)',
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power3.inOut',
                }).
                to('.introduction-container', {
                    display: 'none',
                    duration: 0,
                }).
                to('.navbar-global-container', {
                    height: '100px',
                }, '+=0.3').to('.bottom-border', {
                width: '100%',
            }, '-=0.2').to('.company-name-container, .navigation-links-container', {
                opacity: 1,
                y: 0,
            }).
                to('.company-first-name, .company-second-name, .company-info, .hero-img-container', {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                }, '-=0.2').to('.layout-container', {
                height: 'auto',
                duration: 0,
                onComplete: () => setFirstRender(false),
            });
        }
    }, []);

    return (
        <div className="introduction-container">
            <div className="image one" ref={addToRefs}>
                <Image
                    src={'/assets/image-1.jpg'}
                    alt="introduction image"
                    className="intro-img"
                    fill={true}
                    priority={true}
                />
            </div>
            <div className="image two" ref={addToRefs}>
                <Image
                    src={'/assets/image-2.jpg'}
                    alt="introduction image"
                    className="intro-img"
                    fill={true}
                    priority={true}
                />
            </div>
            <div className="image three" ref={addToRefs}>
                <Image
                    src={'/assets/image-3.jpg'}
                    alt="introduction image"
                    className="intro-img"
                    fill={true}
                    priority={true}
                />
            </div>
            <div className="image four" ref={addToRefs}>
                <Image
                    src={'/assets/image-4.jpg'}
                    alt="introduction image"
                    className="intro-img"
                    fill={true}
                    priority={true}
                />
            </div>
            <div className="image five" ref={addToRefs}>
                <Image
                    src={'/assets/image-5.jpg'}
                    alt="introduction image"
                    className="intro-img"
                    fill={true}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default Introduction;
