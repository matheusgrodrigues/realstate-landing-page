import Header from './components/template/Header';

import GalleryService from '@/services/GalleryService';

export default async function Home() {
    const mainGalleryImages = await GalleryService.getGallery('mainGallery');

    return (
        <>
            <Header data={{ gallery: mainGalleryImages }} />
        </>
    );
}
