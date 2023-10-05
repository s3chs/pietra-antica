import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: -180}}
            animate={{opacity: 1, y: 0}}
            transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.6,
            }}
            className="header"
        >
            <div className="header-inner">
                <div className="logo">Pietra Antica</div>
                <nav className="nav">
                    <li>
                        <a href="/design">Taille de pierre</a>
                    </li>
                    <li>
                        <a href="/strategy">Ravalement de façade</a>
                    </li>
                    <li>
                        <a href="/cases">Maçonnerie traditionnelle</a>
                    </li>
                    <li>
                        <a href="/about">Placage et dallage</a>
                    </li>
                </nav>
            </div>
        </motion.div>
    );
};

export default Header;
