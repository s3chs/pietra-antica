'use client';
import { motion, AnimatePresence} from 'framer-motion';
import {useState } from 'react';
import Loader from '@/app/components/Loader/Loader';
import Banner from '@/app/components/Banner/Banner';
import Header from '@/app/components/Header/Header';

export default function Index() {

    const [loading, setLoading] = useState(true);

    return (
        <AnimatePresence>
            {loading ? (
                <motion.div key="loader">
                    <Loader setLoading={setLoading}/>
                </motion.div>
            ) : (
                <>
                    <Header/>
                    <Banner/>
                    {!loading && (
                        <div className="transition-image final">
                            <motion.img
                                src="/images/image-2.jpg"
                                transition={{ease: [0.6, 0.01, 0.05, 0.9], duration: 1.6}}
                                layoutId="main-image-1"
                            />
                        </div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
}
