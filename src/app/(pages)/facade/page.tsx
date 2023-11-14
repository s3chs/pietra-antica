'use client';

import JobPage from '@/app/components/JobPage/JobPage';
import { useState } from 'react';
import { PagesType } from '@/app/utils/PagesType';
import gsap from '@/app/utils/gsapSetup';
import { router } from 'next/client';

export default function Facade() {

    const [images, setImages] = useState([
        'https://res.cloudinary.com/ddlyipry0/image/upload/v1695053573/large_IMG_0661_facf808cf9.jpg',
        'https://res.cloudinary.com/ddlyipry0/image/upload/v1695053572/large_IMG_0662_eb33c25742.jpg',
        'https://res.cloudinary.com/ddlyipry0/image/upload/v1692959593/large_IMG_7974_de8209ed74.jpg',
        'https://res.cloudinary.com/ddlyipry0/image/upload/v1695053573/large_IMG_0661_facf808cf9.jpg',
        'https://res.cloudinary.com/ddlyipry0/image/upload/v1695053572/large_IMG_0662_eb33c25742.jpg']);
    const [error, setError] = useState<string | null>(null);
    const description: string = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores aspernatur at consequuntur cum delectus\n' +
        '                deserunt doloremque ea eaque eius eligendi ex excepturi fugit harum illo magnam molestiae mollitia nihil nisi non odit\n' +
        '                perferendis placeat qui quidem, sequi sunt tempore ut veritatis vero vitae.';

    return (
        <JobPage
            pageName={PagesType.Facade}
            images={images}
            error={error}
            description={description}
        />
    );
}
