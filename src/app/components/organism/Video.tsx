interface VideoProps {
    video: {
        title: string;
        url: string;
    };
}

const Video: React.FC<VideoProps> = ({ video }) => {
    return (
        <iframe
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            frameBorder="0"
            height="100%"
            width="486px"
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            src={`${video.url}?controls=0&rel=0`}
            loading="lazy"
        />
    );
};

export default Video;
