import { useRef } from 'react';

const Video = () => {

    const videoRef = useRef<any>(null);

    return (
        <div className="section-container video">
            <div className="line-separator"></div>
            <div className="video-wrapper">
                <video ref={videoRef} src="/assets/luxlapis.m4v" controls loop muted autoPlay></video>
            </div>
            <div className="line-separator"></div>
        </div>
    );
};

export default Video;
