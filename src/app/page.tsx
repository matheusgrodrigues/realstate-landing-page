import Header from './components/template/Header';

import GalleryService from '@/services/GalleryService';

export default async function Home() {
    const mainGalleryImages = await GalleryService.getImages('mainGallery');
    // TODO: corrigir a listagem das imagens da galeria
    return (
        <>
            <Header data={{ galleryImages: mainGalleryImages }} />
        </>
    );
}
