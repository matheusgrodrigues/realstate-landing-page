'use client';

import React, { useCallback, useState } from 'react';

import Foto1 from '../../public/images/galeria/fotos/1.jpg';
import Foto2 from '../../public/images/galeria/fotos/2.jpg';
import Foto3 from '../../public/images/galeria/fotos/3.jpg';
import Foto4 from '../../public/images/galeria/fotos/4.jpg';

import Button from './components/atoms/Button';

import MenuPrincipal from './components/organism/MenuPrincipal';
import Fotos, { Foto } from './components/organism/Fotos';

export const mock_fotos: Foto[] = [
    {
        legenda: 'Foto1',
        src: Foto1,
    },
    {
        legenda: 'Foto2',
        src: Foto2,
    },
    {
        legenda: 'Foto3',
        src: Foto3,
    },
    {
        legenda: 'Foto4',
        src: Foto4,
    },

    {
        legenda: 'Foto1',
        src: Foto1,
    },
    {
        legenda: 'Foto2',
        src: Foto2,
    },
    {
        legenda: 'Foto3',
        src: Foto3,
    },
    {
        legenda: 'Foto4',
        src: Foto4,
    },
];

const Header: React.FC = () => {
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
                {showComponent.fotos && <Fotos fotos={mock_fotos} />}

                {showComponent.video && (
                    <div data-testid="component-video" className="size-full  items-center justify-center flex">
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

export default function Home() {
    return (
        <>
            <Header />
        </>
    );
}
