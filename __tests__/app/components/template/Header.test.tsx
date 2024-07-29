import Header from '@/app/components/template/Header';
import FotosProvider from '@/app/providers/Fotos/FotosProvider';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Suspense } from 'react';

describe('Header', () => {
    it('Deve renderizar o header', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue([]),
        });

        render(
            <Header
                providers={{
                    fotos: (
                        <Suspense>
                            <FotosProvider />
                        </Suspense>
                    ),
                }}
            />
        );

        const menu = screen.getByTestId('menu-principal');

        expect(menu).toBeInTheDocument();
    });

    /* describe('Deve renderizar os organisms', () => {
        it('Deve renderizar o MenuPrincipal', () => {
            const menu = screen.getByTestId('menu-principal');

            expect(menu).toBeInTheDocument();
        });

        it('Deve renderizar as Fotos', () => {
            const fotos = screen.getByTestId('component-fotos');
            expect(fotos).toBeInTheDocument();
        });
    });

    describe('Deve renderizar os botôes', () => {
        it('Deve renderizar o Botão "Fotos" com o texto correto', () => {
            const btnOpenFotos = screen.getByTestId('btn-open-fotos');

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
            const btnOpenFotos = screen.getByTestId('btn-open-fotos');
            fireEvent.click(btnOpenFotos);

            const video = screen.queryByTestId('component-video');
            const fotos = screen.queryByTestId('component-fotos');
            const mapa = screen.queryByTestId('component-mapa');

            expect(fotos).toBeInTheDocument();
            expect(video).not.toBeInTheDocument();
            expect(mapa).not.toBeInTheDocument();
        });

        it('Deve renderizar o component Vídeo ao clicar no botão "Vídeo"', () => {
            const btnOpenVideo = screen.getByTestId('btn-open-video');
            fireEvent.click(btnOpenVideo);

            const video = screen.getByTestId('component-video');
            const fotos = screen.queryByTestId('component-fotos');
            const mapa = screen.queryByTestId('component-mapa');

            expect(video).toBeInTheDocument();
            expect(fotos).not.toBeInTheDocument();
            expect(mapa).not.toBeInTheDocument();
        });

        it('Deve renderizar o component Mapa ao clicar no botão "Mapa"', () => {
            const btnOpenMapa = screen.getByTestId('btn-open-mapa');
            fireEvent.click(btnOpenMapa);

            const video = screen.queryByTestId('component-video');
            const fotos = screen.queryByTestId('component-fotos');
            const mapa = screen.getByTestId('component-mapa');

            expect(fotos).not.toBeInTheDocument();
            expect(video).not.toBeInTheDocument();
            expect(mapa).toBeInTheDocument();
        });
    }); */
});
