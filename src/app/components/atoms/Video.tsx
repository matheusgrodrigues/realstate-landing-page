import React, { IframeHTMLAttributes } from 'react';
import VideoSchema from '@/schema/VideoSchema';

interface VideoProps extends React.DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> {
    video: VideoSchema;
}

const Video: React.FC<VideoProps> = ({ video, ...props }) => {
    return (
        <>
            {video && (
                <iframe
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title={video.attributes.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    src={`${video.attributes.url}?controls=0&rel=0`}
                    {...props}
                />
            )}
        </>
    );
};

export default Video;
