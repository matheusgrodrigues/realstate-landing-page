import DescriptionRightSide from '@/app/imoveis/[imovel]/components/template/Description/components/DescriptionRightSide';
import { render, screen } from '@testing-library/react';

describe('Deve renderizar o card de CTA corretamente', () => {
    // TODO: quando tiver buscando os dados via Providers, atualizar estes testes.

    beforeEach(() => render(<DescriptionRightSide />));

    it('Deve renderizar a logo', () => {
        const logo = screen.getByTestId('description-card-logo');

        expect(logo).toBeInTheDocument();
    });

    it('Deve renderizar o texto das parcelas', () => {
        const parcelas = screen.getByTestId('description-card-texto-parcela');

        expect(parcelas).toBeInTheDocument();
    });

    describe('Deve renderizar o telefone', () => {
        it('Deve renderizar o icone ', () => {
            const icone = screen.getByTestId('description-card-icon-phone');

            expect(icone).toBeInTheDocument();
        });

        it('Deve renderizar o telefone', () => {
            const telefone = screen.getByTestId('description-card-phone');

            expect(telefone).toBeInTheDocument();
            expect(telefone).not.toBe('');
        });
    });

    it('Deve renderizar o botão de CTA', () => {
        const button = screen.getByTestId('description-card-button');

        expect(button).toBeInTheDocument();
    });
});
