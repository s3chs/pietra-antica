import ImageBlock from '@/app/components/ImageBlock/ImageBlock';
import { motion } from 'framer-motion';

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: {opacity: 0, y: 200},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
        },
    },
};

const itemMain = {
    hidden: {opacity: 0, y: 200},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 1.6,
        },
    },
};

export default function Loader({setLoading}: any) {

    return (
        <motion.div
            className="loader-container"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            onAnimationComplete={() => setLoading(false)}
        >
            <ImageBlock variants={item} id="image-1"/>
            <motion.div variants={itemMain} className="transition-image">
                <motion.img
                    src="/images/image-2.jpg"
                    alt="random alt"
                    layoutId="main-image-1"
                />
            </motion.div>
            <ImageBlock variants={item} id="image-3"/>
            <ImageBlock variants={item} id="image-4"/>
            <ImageBlock variants={item} id="image-5"/>
        </motion.div>
    );
}
