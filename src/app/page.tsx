import Header from './components/template/Header';

import MainGallery from './providers/gallery/main-gallery/MainGallery';
import MainVideo from './providers/video/main-video/MainVideo';

export default async function Home() {
    return (
        <>
            <Header
                providers={{
                    gallery: <MainGallery />,
                    video: <MainVideo />,
                }}
            />
        </>
    );
}
