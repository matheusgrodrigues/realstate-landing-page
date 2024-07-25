import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import Page from '@/app/page';

describe('Deve renderizar a Home', () => {
    beforeEach(() => render(<Page />));

    describe('Deve renderizar o Header', () => {
        describe('Deve renderizar o MenuPrincipal', () => {
            it('Deve renderizar o MenuPrincipal na tela', () => {
                const menu = screen.getByTestId('menu-principal');

                expect(menu).toBeInTheDocument();
            });

            it('Deve renderizar o botão de abrir o menu no Mobile', () => {
                const btn = screen.getByTestId('btn-open-menu');

                expect(btn).toBeInTheDocument();
            });

            it('Deve renderizar a logo', () => {
                const logo = screen.getByTestId('logo');

                expect(logo).toBeInTheDocument();
            });

            it('Dever renderizar os links', () => {
                const list = screen.getByTestId('list');
                const items = list.querySelectorAll('li');

                expect(list).toBeInTheDocument();
                expect(items).toHaveLength(3);
                ['Inicio', 'Fotos', 'Descrição'].forEach((item, key) =>
                    expect(items[key]).toHaveTextContent(`${item}`)
                );
            });
        });

        describe('Deve renderizar a Seção Principal', () => {
            describe('Deve renderizar a "Galeria de Fotos Principal"', () => {
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
            });

            describe('Deve renderizar o component "Vídeo"', () => {
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
            });

            describe('Deve renderizar o component "Mapa"', () => {
                it('Deve renderizar o Mapa ao clicar no botão "Mapa"', () => {
                    const btnOpenMapa = screen.getByTestId('btn-open-mapa');
                    fireEvent.click(btnOpenMapa);

                    const video = screen.queryByTestId('component-video');
                    const fotos = screen.queryByTestId('component-fotos');
                    const mapa = screen.getByTestId('component-mapa');

                    expect(fotos).not.toBeInTheDocument();
                    expect(video).not.toBeInTheDocument();
                    expect(mapa).toBeInTheDocument();
                });
            });
        });
    });
});
