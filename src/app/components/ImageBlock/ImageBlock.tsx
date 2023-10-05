import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageBlock({id, variants}) {
    return (
        <motion.div
            className={`image-block ${id}`}
            variants={variants}
        >
            <Image
                className={'image-block-img'}
                src={`/images/${id}.jpg`}
                alt={`introduction-img-${id}`}
                fill={true}
                priority={true}
            />
        </motion.div>
    );
}
