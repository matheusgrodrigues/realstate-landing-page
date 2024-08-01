import { screen, render } from '@testing-library/react';

import MainMenu from '../../../../src/app/components/organism/Menu';

describe('Deve renderizar o organism Menu', () => {
    beforeEach(() => render(<MainMenu />));

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
        ['Inicio', 'Fotos', 'Descrição'].forEach((item, key) => expect(items[key]).toHaveTextContent(`${item}`));
    });
});
