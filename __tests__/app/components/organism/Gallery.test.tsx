import { render, screen } from '@testing-library/react';
import Gallery from '../../../../src/app/components/organism/Gallery';

import mock_gallery from '../../../../__mocks__/app/components/organism/Gallery';

describe('organism Gallery', () => {
    beforeEach(() => {
        render(<Gallery gallery={mock_gallery[0]} />);
    });

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
