'use client';

import { Suspense, useCallback, useState } from 'react';

import Button from '../atoms/Button';

import Gallery from '../organism/Gallery';
import Video from '../atoms/Video';
import Menu from '../organism/Menu';

import GallerySchema from '@/schema/GallerySchema';
import VideoSchema from '@/schema/VideoSchema';

interface HeaderProps {
    data: {
        gallery: GallerySchema[];
        video: VideoSchema[];
    };
}
const Header: React.FC<HeaderProps> = ({ data }) => {
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
        <header className="relative" data-testid="header-template">
            <Menu />

            <div className="w-full items-center flex mt-[4rem] h-[30rem]">
                {showComponent.fotos && (
                    <Suspense fallback="Carregando fotos...">
                        <Gallery gallery={data.gallery.length > 0 ? data.gallery[0] : undefined} />
                    </Suspense>
                )}

                {showComponent.video && (
                    <div data-testid="component-video" className="size-full items-center justify-center flex bg-preto">
                        <Suspense fallback="Carregando vídeo...">
                            <Video data-testid="atom-video" video={data.video.length > 0 ? data.video[0] : undefined} />
                        </Suspense>
                    </div>
                )}

                {showComponent.mapa && (
                    <div
                        data-testid="component-mapa"
                        className="size-full bg-azulFeio items-center justify-center flex"
                    >
                        {'Mapa'}
                    </div>
                )}
            </div>

            <div className="container mx-auto py-medio px-medio md:px-[0] flex overflow-x-auto gap-pequeno">
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
        </header>
    );
};

export default Header;
