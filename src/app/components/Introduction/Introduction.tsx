import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Introduction = () => {
    const refs = useRef([]);

    const addToRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(refs.current, {
            duration: 2,
            stagger: 0.3,
            opacity: 1,
            ease: 'power3.inOut',
            y: 0,
        }).to(refs.current, {
            clipPath: 'inset(0% 0% 100% 0%)',
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.inOut',
        });

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
