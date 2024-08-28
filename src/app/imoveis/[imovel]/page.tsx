import GalleryVideoMap from './components/organism/GalleryVideoMap';
import Description from '@/app/imoveis/[imovel]/components/organism/Description';
import Menu from '@/app/components/organism/Menu';

interface HomeProps {
    params: { imovel: string };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ params }: HomeProps) {
    return (
        <>
            <header>
                <Menu />
                <GalleryVideoMap imovelName={params.imovel} />
            </header>

            <Description />
        </>
    );
}
