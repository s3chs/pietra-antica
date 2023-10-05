import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

const banner: Variants = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const letterAni: Variants = {
    initial: {y: 400},
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};

const Banner = () => {
    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);

    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setPlayMarquee(true);
    }, []);

    return (
        <motion.div className="banner" variants={banner}>
            <BannerRowTop title={'Pietra'}/>
            <BannerRowCenter
                title={'Taille de pierre à Bordeaux et ses alentours'}
                playMarquee={playMarquee}
            />
            <BannerRowBottom title={'Antica'}/>
        </motion.div>
    );
};

const AnimatedLetters = ({title, disabled}: {title: string; disabled?: boolean}) => {
    const variants = disabled ? {} : banner;
    const letters = Array.from(title); // Convertir la chaîne en tableau de lettres

    return (
        <motion.span
            className="row-title"
            variants={variants}
            initial="initial"
            animate="animate"
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className="row-letter"
                    variants={disabled ? {} : letterAni}
                >
                    {letter === ' ' ? '\u00A0' : letter} {/* Utilisez "\u00A0" pour un espace non rompu */}
                </motion.span>
            ))}
        </motion.span>
    );
};

const BannerRowTop = ({title}: {title: string}) => {
    return (
        <motion.div className={'banner-row'}>
            <div className="row-col">
                <AnimatedLetters title={title}/>
            </div>
            <motion.div
                initial={{opacity: 0, y: 80}}
                animate={{opacity: 1, y: 0}}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.4,
                }}
                className="row-col"
            >
                <span className="row-message">
                    Spécialiste de la taille de pierre et autres travaux.
                </span>
            </motion.div>
        </motion.div>
    );
};

const BannerRowBottom = ({title}: {title: string}) => {
    return (
        <div className={'banner-row center'}>
            <motion.div
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1}}
                className="scroll"
            >
                <motion.span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 1.8,
                    }}
                >
                    scroll
                </motion.span>
                <motion.span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 1.8,
                    }}
                >
                    down
                </motion.span>
            </motion.div>
            <AnimatedLetters title={title}/>
        </div>
    );
};

const BannerRowCenter = ({title, playMarquee}: {title: string; playMarquee: boolean}) => {
    return (
        <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
            <div className="marquee__inner">
                <AnimatedLetters title={title}/>
                <AnimatedLetters title={title}/>
                <AnimatedLetters title={title}/>
                <AnimatedLetters title={title}/>
            </div>
        </div>
    );
};

export default Banner;
