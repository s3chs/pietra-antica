'use client';

import JobPage from '@/app/components/JobPage/JobPage';
import { PagesType } from '@/app/PagesType';
import { useEffect, useState } from 'react';
import gsap from '@/app/gsapSetup';
import { getImageData } from '@/app/services/fetchService';

export default function Paving() {

    const [images, setImages] = useState([]);
    const [error, setError] = useState<string | null>(null);
    const description: string = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam asperiores aspernatur at consequuntur cum delectus\n' +
        '                deserunt doloremque ea eaque eius eligendi ex excepturi fugit harum illo magnam molestiae mollitia nihil nisi non odit\n' +
        '                perferendis placeat qui quidem, sequi sunt tempore ut veritatis vero vitae.';

    useEffect(() => {
        async function getData() {
            try {
                const imageData = await getImageData('paving?populate=*');
                setImages(imageData);
            } catch (error) {
                setError('Une erreur s\'est produite lors de l\'extraction des données, veuillez actualiser la page.');
            }
        }

        getData();

        gsap.to('.layout-container', {
            overflow: 'auto',
            height: 'auto',
        });
    }, []);

    return (
        <JobPage pageName={PagesType.Paving} images={images} error={error} description={description}/>
    );
}
