import { render, screen } from '@testing-library/react';
import Fotos from '../../../../src/app/components/organism/Gallery';

describe('Deve renderizar o organism fotos corretamente', () => {
    beforeEach(() => render(<Fotos fotos={[]} />));

    // TODO: quando tiver consumindo as fotos, criar um teste para verificar se as fotos forão carregadas na tela.

    it('Deve renderizar a arrow-left', () => {
        const arrowLeft = screen.getByTestId('component-fotos-arrow-left');
        expect(arrowLeft).toBeInTheDocument();
    });

    it('Deve renderizar a arrow-right', () => {
        const arrowRight = screen.getByTestId('component-fotos-arrow-right');
        expect(arrowRight).toBeInTheDocument();
    });
});
