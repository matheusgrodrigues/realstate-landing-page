import Gallery from '@/app/components/organism/Gallery';
import GalleryService from '@/services/GalleryService';

export default async function MainGallery() {
    const gallery = await GalleryService.getGallery('/api/gallery/', 'main-gallery');

    return (
        <>
            <Gallery gallery={gallery ? gallery[0] : undefined} />
        </>
    );
}
