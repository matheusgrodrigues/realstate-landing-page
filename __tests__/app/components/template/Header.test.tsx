import Header from '@/app/components/template/Header';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import MainGallery from '@/app/providers/gallery/main-gallery/MainGallery';
import MainVideo from '@/app/providers/video/main-video/MainVideo';
import MainMap from '@/app/providers/map/main-map/MainMap';

describe('Dever renderizar o template Header', () => {
    global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
    });

    beforeEach(async () => {
        const mainGallery = await MainGallery();
        const mainVideo = await MainVideo();
        const mainMap = await MainMap();

        return render(
            <Header
                providers={{
                    gallery: mainGallery,
                    video: mainVideo,
                    mapa: mainMap,
                }}
            />
        );
    });

    it('Deve renderizar o MainMenu', () => {
        const menu = screen.getByTestId('menu-principal');

        expect(menu).toBeInTheDocument();
    });

    it('Deve renderizar as Fotos', () => {
        const fotos = screen.getByTestId('component-gallery');
        expect(fotos).toBeInTheDocument();
    });

    it('Deve ter pelo menos 3 fotos na tela', () => {
        waitFor(() => {
            const fotos = screen.getAllByTestId('component-gallery-image');

            expect(fotos.length).toBeGreaterThanOrEqual(3);
        });
    });

    describe('Deve renderizar os botôes', () => {
        it('Deve renderizar o Botão "Fotos" com o texto correto', () => {
            const btnOpenFotos = screen.getByTestId('btn-open-gallery');

            expect(btnOpenFotos).toBeInTheDocument();
            expect(btnOpenFotos).toHaveTextContent('Fotos');
        });

        it('Deve renderizar o Botão "Video" texto correto', () => {
            const btnOpenVideo = screen.getByTestId('btn-open-video');

            expect(btnOpenVideo).toBeInTheDocument();
            expect(btnOpenVideo).toHaveTextContent('Vídeo');
        });

        it('Deve renderizar o Botão "Mapa" texto correto', () => {
            const btnOpenMapa = screen.getByTestId('btn-open-mapa');

            expect(btnOpenMapa).toBeInTheDocument();
            expect(btnOpenMapa).toHaveTextContent('Mapa');
        });
    });

    describe('Deve executar as ações ao clicar nos botôes corretamente', () => {
        it('Deve renderizar o component Fotos ao clicar no botão "Fotos"', () => {
            const btnOpenFotos = screen.getByTestId('btn-open-gallery');
            fireEvent.click(btnOpenFotos);

            const video = screen.queryByTestId('component-video');
            const fotos = screen.queryByTestId('component-gallery');
            const mapa = screen.queryByTestId('component-mapa');

            expect(fotos).toBeInTheDocument();
            expect(video).not.toBeInTheDocument();
            expect(mapa).not.toBeInTheDocument();
        });

        describe('Deve renderizar o component Vídeo ao clicar no botão "Vídeo"', () => {
            it('Deve renderizar o Vídeo', () => {
                const btnOpenVideo = screen.getByTestId('btn-open-video');
                fireEvent.click(btnOpenVideo);

                const video = screen.getByTestId('component-video');
                const fotos = screen.queryByTestId('component-fotos');
                const mapa = screen.queryByTestId('component-mapa');

                expect(video).toBeInTheDocument();
                expect(fotos).not.toBeInTheDocument();
                expect(mapa).not.toBeInTheDocument();
            });

            it('Deve ter o titulo do Vídeo', () => {
                waitFor(() => {
                    const btnOpenVideo = screen.getByTestId('btn-open-video');
                    fireEvent.click(btnOpenVideo);

                    const video = screen.getByTestId('component-video');
                    const fotos = screen.queryByTestId('component-fotos');
                    const mapa = screen.queryByTestId('component-mapa');

                    expect(video).toBeInTheDocument();
                    expect(fotos).not.toBeInTheDocument();
                    expect(mapa).not.toBeInTheDocument();

                    const iframe = screen.getByTestId('atom-video');

                    expect(iframe).toBeInTheDocument();
                    expect(iframe.getAttribute('title')).not.toBe('');
                });
            });

            it('Deve ter o src do Vídeo', () => {
                waitFor(() => {
                    const btnOpenVideo = screen.getByTestId('btn-open-video');
                    fireEvent.click(btnOpenVideo);

                    const video = screen.getByTestId('component-video');
                    const fotos = screen.queryByTestId('component-fotos');
                    const mapa = screen.queryByTestId('component-mapa');

                    expect(video).toBeInTheDocument();
                    expect(fotos).not.toBeInTheDocument();
                    expect(mapa).not.toBeInTheDocument();

                    const iframe = screen.getByTestId('atom-video');

                    expect(iframe).toBeInTheDocument();
                    expect(iframe.getAttribute('src')).not.toBe('');
                });
            });
        });

        describe('Deve renderizar o component Mapa ao clicar no botão "Mapa"', () => {
            it('Deve renderizar o Mapa', () => {
                const btnOpenMapa = screen.getByTestId('btn-open-mapa');
                fireEvent.click(btnOpenMapa);

                const video = screen.queryByTestId('component-video');
                const fotos = screen.queryByTestId('component-fotos');
                const mapa = screen.getByTestId('component-mapa');

                expect(fotos).not.toBeInTheDocument();
                expect(video).not.toBeInTheDocument();
                expect(mapa).toBeInTheDocument();
            });

            it('Deve ter o titulo do Mapa', () => {
                waitFor(() => {
                    const btnOpenMapa = screen.getByTestId('btn-open-mapa');
                    fireEvent.click(btnOpenMapa);

                    const video = screen.queryByTestId('component-video');
                    const fotos = screen.queryByTestId('component-fotos');
                    const mapa = screen.getByTestId('component-mapa');

                    expect(fotos).not.toBeInTheDocument();
                    expect(video).not.toBeInTheDocument();
                    expect(mapa).toBeInTheDocument();

                    const iframe = screen.getByTestId('atom-map');

                    expect(iframe).toBeInTheDocument();
                    expect(iframe.getAttribute('title')).not.toBe('');
                });
            });

            it('Deve ter o src do Vídeo', () => {
                waitFor(() => {
                    const btnOpenMapa = screen.getByTestId('btn-open-mapa');
                    fireEvent.click(btnOpenMapa);

                    const video = screen.queryByTestId('component-video');
                    const fotos = screen.queryByTestId('component-fotos');
                    const mapa = screen.getByTestId('component-mapa');

                    expect(fotos).not.toBeInTheDocument();
                    expect(video).not.toBeInTheDocument();
                    expect(mapa).toBeInTheDocument();

                    const iframe = screen.getByTestId('atom-map');

                    expect(iframe).toBeInTheDocument();
                    expect(iframe.getAttribute('src')).not.toBe('');
                });
            });
        });
    });
});
