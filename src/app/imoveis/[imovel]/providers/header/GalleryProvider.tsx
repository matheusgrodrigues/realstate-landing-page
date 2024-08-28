import GalleryService from '@/services/GalleryService';
import Gallery from '../../components/organism/Gallery';

export default async function GalleryProvider() {
    const gallery = await GalleryService.getGallery('/imoveis/teste/api/gallery/', 'main-gallery');
    return <Gallery gallery={gallery ? gallery[0] : undefined} />;
}
