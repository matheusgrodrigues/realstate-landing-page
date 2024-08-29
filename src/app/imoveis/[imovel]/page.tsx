import GalleryVideoMap from './components/template/GalleryVideoMap';
import Description from '@/app/imoveis/[imovel]/components/organism/Description';
import Menu from '@/app/components/organism/Menu';
import GalleryProvider from './providers/GalleryVideoMap/GalleryProvider';
import VideoProvider from './providers/GalleryVideoMap/VideoProvider';
import MapProvider from './providers/GalleryVideoMap/MapProvider';

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

            <main>
                <Description />
            </main>
        </>
    );
}
