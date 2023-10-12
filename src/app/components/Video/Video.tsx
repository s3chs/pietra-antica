import { useRef } from 'react';

const Video = () => {

    const videoRef = useRef<any>(null);

    return (
        <section className="section-container video">
            <div className="line-separator"></div>
            <span className="title">Notre art</span>
            <div className="video-wrapper">
                <video ref={videoRef} src="/assets/luxlapis.m4v" controls loop muted autoPlay></video>
            </div>
            <div className="line-separator"></div>
        </section>
    );
};

export default Video;
