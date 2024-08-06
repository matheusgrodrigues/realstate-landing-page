import Description from './components/template/Description';
import Header from './components/template/Header';

import MainGallery from './providers/gallery/main-gallery/MainGallery';
import MainVideo from './providers/video/main-video/MainVideo';
import MainMap from './providers/map/main-map/MainMap';

export default async function Home() {
    return (
        <>
            <Header
                providers={{
                    gallery: <MainGallery />,
                    video: <MainVideo />,
                    mapa: <MainMap />,
                }}
            />

            <Description />
        </>
    );
}
