import GalleryService from '@/services/GalleryService';
import Gallery from '../../components/organism/Gallery';

interface GalleryProviderProps {
    imovelName: string;
}

export default async function GalleryProvider({ imovelName }: GalleryProviderProps) {
    const gallery = await GalleryService.getGallery(`/imoveis/${imovelName}/api/gallery-video-map/`, 'gallery');
    return <Gallery gallery={gallery ? gallery[0] : undefined} />;
}
