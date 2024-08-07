import { render, screen } from '@testing-library/react';

import DescriptionLeftSide from '@/app/components/template/Description/components/DescriptionLeftSide';

describe('Deve renderizar o DescriptionLeftSide corretamente', () => {
    // TODO: quando tiver buscando os dados via Providers, atualizar estes testes.

    beforeEach(() => render(<DescriptionLeftSide />));

    it('Deve renderizar o nome do empreendimento', () => {
        const nome = screen.getByTestId('description-nome-emp');

        expect(nome).toBeInTheDocument();
        expect(nome).not.toHaveTextContent('');
    });

    it('Deve renderizar o status do empreendimento', () => {
        const status = screen.getByTestId('description-status-emp');

        expect(status).toBeInTheDocument();
        expect(status).not.toHaveTextContent('');
    });

    it('Deve renderizar o endereço do empreendimento', () => {
        const endereco = screen.getByTestId('description-endereco-emp');

        expect(endereco).toBeInTheDocument();
        expect(endereco).not.toHaveTextContent('');
    });

    it('Deve renderizar o icone do endereço do empreendimento', () => {
        const icone = screen.getByTestId('description-endereco-emp-icon');

        expect(icone).toBeInTheDocument();
    });

    it('Deve renderizar o estado do endereço do empreendimento', () => {
        const estado = screen.getByTestId('description-endereco-emp-estado');

        expect(estado).toBeInTheDocument();
    });

    describe('Deve renderizar a descrição do empreendimento, corretamente', () => {
        it('Deve renderizar a descrição', () => {
            const descricao = screen.getByTestId('description-emp-descricao');

            expect(descricao).toBeInTheDocument();
            expect(descricao).not.toHaveTextContent('');
        });

        it('Deve renderizar o bairro', () => {
            const bairro = screen.getByTestId('description-emp-descricao-bairro');

            expect(bairro).toBeInTheDocument();
            expect(bairro).not.toHaveTextContent('');
        });

        it('Deve renderizar o link de solicitação de orçamento', () => {
            const link = screen.getByTestId('description-emp-descricao-link');

            expect(link).toBeInTheDocument();
            expect(link.getAttribute('src')).not.toBe('');
        });

        describe('Deve renderizar os diferenciais corretamente', () => {
            it('Deve renderizar os diferenciais', () => {
                const diferenciais = screen.getByTestId('description-emp-diferenciais');

                expect(diferenciais).toBeInTheDocument();
            });

            it('Deve renderizar 4 diferenciais', () => {
                const diferenciais = screen.getAllByTestId('description-emp-diferenciais-item');

                expect(diferenciais.length).toBeGreaterThanOrEqual(4);
            });
        });
    });
});
