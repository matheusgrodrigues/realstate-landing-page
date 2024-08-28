import GalleryVideoMap from './components/organism/GalleryVideoMap';
import Description from '@/app/imoveis/[imovel]/components/organism/Description';
import Menu from '@/app/components/organism/Menu';
import GalleryProvider from './components/organism/GalleryVideoMap/providers/GalleryVideoMap/GalleryProvider';
import VideoProvider from './components/organism/GalleryVideoMap/providers/GalleryVideoMap/VideoProvider';
import MapProvider from './components/organism/GalleryVideoMap/providers/GalleryVideoMap/MapProvider';

interface HomeProps {
    params: { imovel: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ params }: HomeProps) {
    return (
        <>
            <header>
                <Menu />

                <GalleryVideoMap
                    providers={{
                        gallery: <GalleryProvider imovelName={params.imovel} />,
                        video: <VideoProvider imovelName={params.imovel} />,
                        map: <MapProvider imovelName={params.imovel} />,
                    }}
                />
            </header>

            <Description />
        </>
    );
}
