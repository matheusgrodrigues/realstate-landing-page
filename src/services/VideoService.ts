import VideoSchema from '@/schema/VideoSchema';

type VideoName = 'main-video';

const domain = process.env.NEXT_PUBLIC_DOMAIN;

const VideoService = {
    getVideo: async (endpoint: string, videoName: VideoName): Promise<VideoSchema[]> => {
        const res = await fetch(`${domain}${endpoint}${videoName}`);
        const { data } = await res.json();

        return data;
    },
};

export default VideoService;
