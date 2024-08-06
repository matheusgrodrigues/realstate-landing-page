'use client';

import { Suspense, useCallback, useState } from 'react';

import Button from '../atoms/Button';
import Menu from '../organism/Menu';

import BaseClientProvider from '../base/BaseClientProvider';

interface HeaderProps {
    providers: {
        gallery: React.ReactNode;
        video: React.ReactNode;
        mapa: React.ReactNode;
    };
}
const Header: React.FC<HeaderProps> = ({ providers }) => {
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
                    <Suspense fallback="Carregando galeria...">
                        <BaseClientProvider render={providers.gallery} />
                    </Suspense>
                )}

                {showComponent.video && (
                    <div data-testid="component-video" className="size-full items-center justify-center flex bg-preto">
                        <Suspense fallback="Carregando videos...">
                            <BaseClientProvider render={providers.video} />
                        </Suspense>
                    </div>
                )}

                {showComponent.mapa && (
                    <div data-testid="component-mapa" className="size-full items-center justify-center flex">
                        <Suspense fallback="Carregando mapa...">
                            <BaseClientProvider render={providers.mapa} />
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
        </header>
    );
};

export default Header;
