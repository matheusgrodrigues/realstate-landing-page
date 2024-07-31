import Header from './components/template/Header';

import GalleryService from '@/services/GalleryService';
import VideoService from '@/services/VideoService';

export default async function Home() {
    const gallery = await GalleryService.getGallery('/api/gallery', 'main-gallery');
    const video = await VideoService.getVideo('/api/video/', 'main-video');

    return (
        <>
            <Header data={{ gallery, video }} />
        </>
    );
}
