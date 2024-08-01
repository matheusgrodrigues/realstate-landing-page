import Video from '@/app/components/atoms/Video';
import VideoService from '@/services/VideoService';

export default async function MainVideo() {
    const video = await VideoService.getVideo('/api/video/', 'main-video');

    return (
        <>
            <Video data-testid="atom-video" video={video ? video[0] : undefined} />
        </>
    );
}
