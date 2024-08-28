'use client';

import { Suspense, useCallback, useState } from 'react';

import BaseClientProvider from '../../../../../components/base/BaseClientProvider';
import GalleryProvider from './providers/GalleryVideoMap/GalleryProvider';
import VideoProvider from './providers/GalleryVideoMap/VideoProvider';
import MapProvider from './providers/GalleryVideoMap/MapProvider';
import Button from '../../../../../components/atoms/Button';

interface GalleryVideoMapProps {
    imovelName: string;
}

const GalleryVideoMap: React.FC<GalleryVideoMapProps> = ({ imovelName }) => {
    const [showComponent, setShowComponent] = useState({
        video: false,
        fotos: true,
        mapa: false,
    });

    const handleShowFotos = useCallback(
        () =>
            setShowComponent({
                video: false,
                fotos: true,
                mapa: false,
            }),

        []
    );

    const handleShowVideo = useCallback(
        () =>
            setShowComponent({
                video: true,
                fotos: false,
                mapa: false,
            }),
        []
    );

    const handleShowMapa = useCallback(
        () =>
            setShowComponent({
                video: false,
                fotos: false,
                mapa: true,
            }),
        []
    );

    return (
        <section className="relative" data-testid="GalleryVideoMap-template">
            <div className="w-full items-center flex mt-[4rem] h-[30rem]">
                {showComponent.fotos && (
                    <Suspense fallback="Carregando galeria...">
                        <BaseClientProvider render={<GalleryProvider imovelName={imovelName} />} />
                    </Suspense>
                )}

                {showComponent.video && (
                    <div data-testid="component-video" className="size-full items-center justify-center flex bg-preto">
                        <Suspense fallback="Carregando videos...">
                            <BaseClientProvider render={<VideoProvider imovelName={imovelName} />} />
                        </Suspense>
                    </div>
                )}

                {showComponent.mapa && (
                    <div data-testid="component-mapa" className="size-full items-center justify-center flex">
                        <Suspense fallback="Carregando mapa...">
                            <BaseClientProvider render={<MapProvider imovelName={imovelName} />} />
                        </Suspense>
                    </div>
                )}
            </div>

            <div className="container max-w-[1080px] mx-auto py-medio px-medio xl:px-[0] flex overflow-x-auto gap-pequeno">
                <Button
                    data-testid="btn-open-gallery"
                    onClick={handleShowFotos}
                    config={{ variant: 'default', active: showComponent.fotos }}
                >
                    Fotos
                </Button>
                <Button
                    data-testid="btn-open-video"
                    onClick={handleShowVideo}
                    config={{ variant: 'default', active: showComponent.video }}
                >
                    Vídeo
                </Button>
                <Button
                    data-testid="btn-open-mapa"
                    onClick={handleShowMapa}
                    config={{ variant: 'default', active: showComponent.mapa }}
                >
                    Mapa
                </Button>
            </div>
        </section>
    );
};

export default GalleryVideoMap;
