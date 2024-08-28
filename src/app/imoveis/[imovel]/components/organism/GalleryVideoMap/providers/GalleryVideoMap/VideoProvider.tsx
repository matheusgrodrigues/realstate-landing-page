import VideoService from '@/services/VideoService';
import Video from '@/app/imoveis/[imovel]/components/atoms/Video';

interface VideoProviderProps {
    imovelName: string;
}

export default async function VideoProvider({ imovelName }: VideoProviderProps) {
    const video = await VideoService.getVideo(`/imoveis/${imovelName}/api/galleryVideoMap/`, 'video');
    return <Video data-testid="atom-video" video={video ? video[0] : undefined} />;
}
