import { render, screen } from '@testing-library/react';
import Gallery from '../../../../src/app/components/organism/Gallery';

describe('Deve renderizar o organism Gallery', () => {
    beforeEach(() => {
        render(<Gallery gallery={undefined} />);
    });

    it('Deve renderizar as Fotos', () => {
        const fotos = screen.getByTestId('component-gallery');
        expect(fotos).toBeInTheDocument();
    });

    it('Deve renderizar a arrow-left', () => {
        const arrowLeft = screen.getByTestId('component-gallery-arrow-left');
        expect(arrowLeft).toBeInTheDocument();
    });

    it('Deve renderizar a arrow-right', () => {
        const arrowRight = screen.getByTestId('component-gallery-arrow-right');
        expect(arrowRight).toBeInTheDocument();
    });
});
