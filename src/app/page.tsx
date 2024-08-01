import Header from './components/template/Header';

import GalleryService from '@/services/GalleryService';
import VideoService from '@/services/VideoService';
import { Suspense } from 'react';

export default async function Home() {
    const [gallery, video] = await Promise.all([
        GalleryService.getGallery('/api/gallery', 'main-gallery'),
        VideoService.getVideo('/api/video/', 'main-video'),
    ]);

    return (
        <>
            <Header data={{ gallery, video }} />
        </>
    );
}
