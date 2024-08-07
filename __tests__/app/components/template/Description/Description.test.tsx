import { render, screen } from '@testing-library/react';
import Description from '@/app/components/template/Description/Description';

describe('Deve renderizar o template Description corretamente', () => {
    // TODO: quando tiver buscando os dados via Providers, atualizar estes testes.

    beforeEach(() => render(<Description />));

    it('Deve renderizar o DescriptionLeftSide', () => {
        const leftSide = screen.getByTestId('description-left-side');

        expect(leftSide).toBeInTheDocument();
    });

    it('Deve renderizar o DescriptionRightSide', () => {
        const rightSide = screen.getByTestId('description-card');

        expect(rightSide).toBeInTheDocument();
    });
});
