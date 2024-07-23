import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/page';

describe('Deve renderizar a Home corretamente', () => {
    beforeEach(() => render(<Page />));

    describe('Deve renderizar o MenuPrincipal corretamente', () => {
        it('Deve renderizar o MenuPrincipal', () => {
            const menu = screen.getByTestId('menu-principal');

            expect(menu).toBeInTheDocument();
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
            ['Inicio', 'Fotos', 'Descrição'].forEach((item, key) => expect(items[key]).toHaveTextContent(`${item}`));
        });
    });
});
