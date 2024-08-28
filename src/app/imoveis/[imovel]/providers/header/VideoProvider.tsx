import VideoService from '@/services/VideoService';
import Video from '@/app/imoveis/[imovel]/components/atoms/Video';

export default async function VideoProvider() {
    const video = await VideoService.getVideo('/imoveis/teste/api/video/', 'main-video');
    return <Video data-testid="atom-video" video={video ? video[0] : undefined} />;
}
