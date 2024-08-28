import GalleryService from '@/services/GalleryService';
import Gallery from '../../../Gallery';

interface GalleryProviderProps {
    imovelName: string;
}

export default async function GalleryProvider({ imovelName }: GalleryProviderProps) {
    const gallery = await GalleryService.getGallery(`/imoveis/${imovelName}/api/galleryVideoMap/`, 'gallery');
    return <Gallery gallery={gallery ? gallery[0] : undefined} />;
}
