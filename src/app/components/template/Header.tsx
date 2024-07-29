'use client';

import { Suspense, useCallback, useState } from 'react';
import MenuPrincipal from '../organism/MenuPrincipal';
import Button from '../atoms/Button';

interface HeaderProps {
    providers: {
        fotos: React.ReactNode;
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
        <header className="relative">
            <MenuPrincipal />

            <div className="w-full items-center flex mt-[4rem] h-[30rem]">
                {showComponent.fotos && <Suspense fallback="Carregando fotos...">{providers.fotos}</Suspense>}

                {showComponent.video && (
                    <div data-testid="component-video" className="size-full items-center justify-center flex">
                        {'Vídeo'}
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

            <div className="container mx-auto py-medio flex gap-pequeno">
                <Button
                    data-testid="btn-open-fotos"
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
