import GalleryProvider from './providers/header/GalleryProvider';
import VideoProvider from './providers/header/VideoProvider';
import MapProvider from './providers/header/MapProvider';
import Description from '@/app/imoveis/[imovel]/components/template/Description';
import Header from '@/app/imoveis/[imovel]/components/template/Header';

export default async function Home() {
    return (
        <>
            <Header
                providers={{
                    gallery: <GalleryProvider />,
                    video: <VideoProvider />,
                    mapa: <MapProvider />,
                }}
            />

            <Description />
        </>
    );
}
